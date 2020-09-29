using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GarmentsERP.Controllers.MarchandisingModule.TableViews
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerchandisingTableViewsController : ControllerBase
    {

        private readonly GarmentERPContext _context;

        public MerchandisingTableViewsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MerchandisingTableViews
        [HttpGet("JobOrOrderSelectionViews")]
        public IEnumerable<JobOrOrderNoSelectionForm> JobOrOrderSelectionViews()
        {

            var result = from order in _context.tblInitialOrder
                         join po in _context.tblPODetailsInfro
                         on order.OrderAutoID equals po.InitialOrderID
                         select new JobOrOrderNoSelectionForm
                         {

                             OrderAutoId = order.OrderAutoID,
                             PoDetId = po.PoDetID,
                             JobNo = order.JobNo,
                             // Year 
                             // Company 
                             BuyerName = _context.BuyerProfile.FirstOrDefault(w => w.Id == order.BuyerID).ContactName,
                            StyleRefNo=order.Style_Ref,
                             Style_Description = order.Style_Description,
                             BuyerId = order.BuyerID,
                             CurrencyId=order.CurrencyID,
                             OrderUomId=order.Order_Uom_ID,
                             CompanyId=order.CompanyID,
                             Smv=order.SMV,
                             SeasonId=order.Season_ID,
                            JobQty = _context.tblPODetailsInfro.Where(w=>w.InitialOrderID==order.OrderAutoID).Sum(s=>s.PO_Quantity),
                            PoNumber =po.PO_No,
                            PoQuantity =po.PO_Quantity,
                             ShipmentDate =po.Org_Shipment_Date,
                            // GmtsNature =
                             
                            FileNo =po.File_No,
                             RegionID=order.RegionID,
                             CostingDate=po.PO_Received_Date,
                             //Leadtime 

                         };

            return result.ToList();
        }


        // GET: api/MerchandisingTableViews
        [HttpGet("EmbellishmentWOV2Views")]
        public IEnumerable<EmbellishmentWOV2SelectionFrom> EmbellishmentWOV2Views()
        {

            var result = from ewo in _context.EmbellishmentWorkOrderV2
                         join ewod in _context.EmbellishmentWorkOrderV2Details
                         on ewo.Id equals ewod.EmbellishmentWorkOrderV2Id
                         into EmbellishmentGroup
                         from eg in EmbellishmentGroup.DefaultIfEmpty()
                         select new EmbellishmentWOV2SelectionFrom
                         {
                             Id = ewo.Id,
                             WoNo = ewo.WoNo,
                             JobNo = ewo.JobNo, 
                             BuyerName = _context.BuyerProfile.FirstOrDefault(w => w.Id == ewo.BuyerProfileId).ContactName,
                             WODate = ewo.WODate,
                             DeliveryDate = ewo.DeliveryDate,
                             SupplierName = ewo.SupplierName,
                             ReadyToApprove = ewo.ReadyToApprove,
                             OrdNo = eg.OrdNo,
                             GarmentsItemName = _context.GarmentsItemEntry.FirstOrDefault(w => w.Id == eg.GarmentsItemId).ItemName,
                             BookingNature = eg.BookingNature,
                       


                         };

            return result.ToList();
        }



    }
}
