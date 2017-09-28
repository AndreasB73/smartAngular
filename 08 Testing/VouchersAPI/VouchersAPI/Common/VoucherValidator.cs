using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vouchers;

namespace VouchersAPI.Common
{
	public class VoucherValidator
    {
		public static bool Validate(Voucher voucher)
        {
            bool detailSumOk = false;
            if (voucher.Details != null)
            {
                var sumD = 0;
                foreach (var vd in voucher.Details)
                {
                    sumD += vd.Amount;
                }
                detailSumOk = sumD == voucher.Amount;
            }
            return detailSumOk;
        }
    }
}