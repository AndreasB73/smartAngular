﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace Vouchers.Api
{
    [Route("api/[controller]")]
    public class VouchersController : Controller
    {
        private VouchersDBContext ctx;
        private IVouchersRepository rep;

        public VouchersController(VouchersDBContext context, IVouchersRepository repository)
        {
            ctx = context;
            rep = repository;
        }

        [Authorize]
        // http://localhost:PORT/api/vouchers        
        [HttpGet]
        public IEnumerable<Voucher> Get()
        {
            var vouchers = ctx.Vouchers.OrderByDescending(v => v.Date).ToList();
            return vouchers;
        }

        // http://localhost:PORT/vouchers/3
        [HttpGet("{id}")]
        public Voucher Get(int id)
        {
            return id==0 ? new Voucher{Date = DateTime.Now} : ctx.Vouchers.Include(f=>f.Details).FirstOrDefault(v => v.ID == id);
        }

        [HttpPost]
        public void Post([FromBody]Voucher value)
        {
            foreach (VoucherDetail vd in value.Details)
            {
                vd.Account = null;
            }
            ctx.Vouchers.Add(value);
            ctx.SaveChanges();
        }

        [HttpPut()]        
        public void Put([FromBody]Voucher value) //Classic .NET Core WebApi pattern: public void Put(int id, [FromBody]Voucher value)
        {
            ctx.Vouchers.Attach(value);
            ctx.Entry(value).State = EntityState.Modified;
            foreach (VoucherDetail vd in value.Details)
            {
                ctx.VoucherDetails.Attach(vd);
                ctx.Entry(vd).State = EntityState.Modified;
            }
            ctx.SaveChanges();
        }
        
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var v = Get(id);
            if (v!=null)
            {
                ctx.Remove(v);
                ctx.SaveChanges();
            }
        }

        //Custom Routes

        // GET: http://localhost:PORT/api/vouchers/getsum/false | true
        [Route("GetSum/{expenses}")]
        public string GetSum(bool expenses)
        {
            string result = expenses ? "Total Expenses: " : "Total Income: ";
            var accts = ctx.BalanceAccounts.Where(f => f.Expense == expenses).Select(f => f.ID).ToList();
            var vds = ctx.VoucherDetails.Where(f => f.Account != null && accts.Contains(f.AccountID)).Sum(f => f.Amount);
            return result + vds.ToString();
        }

        // GET: http://localhost:PORT/api/vouchers/getvm/1
        [Route("getvm/{id}")]
        public VoucherViewModel GetVoucherViewModel(int Id)
        {
            //Using Repository
            VoucherViewModel model = rep.GetVoucher(Id);
            return model;
        }
        
        //Save implemented as one method
        // POST: http://localhost:PORT/api/vouchers/save
        [HttpPost]
        [Route("Save")]
        public int Save([FromBody] Voucher value)
        {
            if (value.ID == 0)
            {
                ctx.Vouchers.Add(value);
            }
            else
            {
                //Update using attach and entity state pattern
                ctx.Vouchers.Attach(value);
                ctx.Entry(value).State = EntityState.Modified;
            }
            ctx.SaveChanges();
            return value.ID;
        }
    }
}
