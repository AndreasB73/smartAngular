using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Vouchers
{

    [Route("api/[controller]")]
    public class AccountsController : Controller
    {

        VouchersDBContext ctx;
        public AccountsController(VouchersDBContext context)
        {
            ctx = context;
        }

        [HttpGet]
        public IEnumerable<BalanceAccount> Get()
        {
            return ctx.BalanceAccounts;
        }

        [HttpGet("{id}")]
        public BalanceAccount Get(int id)
        {
            return id == 0 ? new BalanceAccount { } : ctx.BalanceAccounts.Include(f => f.VoucherDetails).FirstOrDefault(a => a.ID == id);
        }

        [HttpPost]
        public void Post([FromBody]BalanceAccount value)
        {
            if (value.VoucherDetails != null)
            {
                foreach (VoucherDetail vd in value.VoucherDetails)
                {
                    vd.Account = null;
                }
            }
            ctx.BalanceAccounts.Add(value);
            ctx.SaveChanges();
        }

        [HttpPut()]
        public void Put([FromBody]BalanceAccount value) //Classic .NET Core WebApi pattern: public void Put(int id, [FromBody]Voucher value)
        {
            ctx.BalanceAccounts.Attach(value);
            ctx.Entry(value).State = EntityState.Modified;
            if (value.VoucherDetails != null)
            {
                foreach (VoucherDetail vd in value.VoucherDetails)
                {
                    ctx.VoucherDetails.Attach(vd);
                    ctx.Entry(vd).State = EntityState.Modified;
                }
            }
            ctx.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var a = Get(id);
            if (a != null)
            {
                ctx.Remove(a);
                ctx.SaveChanges();
            }
        }

    }
}