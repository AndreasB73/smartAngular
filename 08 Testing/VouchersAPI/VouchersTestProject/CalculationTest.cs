using System;
using System.Collections.Generic;
using Vouchers;
using Xunit;

namespace VouchersTestProject
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {

            Voucher voucher = new Voucher()
            {
                ID = 2,
                Text = "BP Tankstelle",
                Date = DateTime.Now,
                Amount = 650,
                Paid = false,
                Expense = false,
                Remark = true,
                Details =  new List<VoucherDetail>()
            };
        }
    }
}
