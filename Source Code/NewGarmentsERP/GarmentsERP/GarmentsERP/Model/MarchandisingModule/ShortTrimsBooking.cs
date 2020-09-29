using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GarmentsERP.Model.MarchandisingModule
{
    public class ShortTrimsBooking
    {
      
public int Id {get;set;}
public string BookingNo {get;set;}
public string BookingMonth {get;set;}
public string BookingYear {get;set;}
public string JobNo {get;set;}
public int CompanyNameId {get;set;}
public int BuyerNameId {get;set;}
public string BookingDate {get;set;}
public string PayMode {get;set;}
public string DeliveryDate {get;set;}
public int CurrencyId {get;set;}
public double ExchangeRate {get;set;}
public int SupplierNameId {get;set;}
public string Source {get;set;}
public string SelectItem {get;set;}
public string Attention {get;set;}
public string ReadyToApproved {get;set;}
public string MaterialSource {get;set; }
public string EntryDate { get; set; }
public string EntryBy { get; set; }
 public string Status { get; set; }

    }
}
