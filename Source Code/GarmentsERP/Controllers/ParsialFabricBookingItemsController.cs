using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarmentsERP.Model;
using GarmentsERP.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParsialFabricBookingItemsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ParsialFabricBookingItemsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ParsialFabricBookingItems
        [HttpGet]
        public IEnumerable<ParsialFabricBookingItems> GetParsialFabricBookingItems()
        {
            return _context.ParsialFabricBookingItems;
        }

        // GET: api/ParsialFabricBookingItems/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetParsialFabricBookingItems([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var parsialFabricBookingItems = await _context.ParsialFabricBookingItems.FindAsync(id);

            if (parsialFabricBookingItems == null)
            {
                return NotFound();
            }

            return Ok(parsialFabricBookingItems);
        }

        // filter by Where masterId

        // GET: api/ParsialFabricBookingItems/masterId/5
        [HttpGet("masterId/{masterId}")]
        public async Task<IActionResult> GetParsialFabricBookingItemByMasterId([FromRoute] int masterId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var parsialFabricBookingItems = await _context.ParsialFabricBookingItems
                                                .Where(x => x.bookingMasterId == masterId&&x.bookingMasterId!=null)
                                                .ToListAsync();

            if (parsialFabricBookingItems == null)
            {
                return NotFound();
            }

            return Ok(parsialFabricBookingItems);
        }


        // PUT: api/ParsialFabricBookingItems/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutParsialFabricBookingItems([FromRoute] int id,  ParsialFabricBookingItems parsialFabricBookingItems)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != parsialFabricBookingItems.id)
            {
                return BadRequest();
            }

            _context.Entry(parsialFabricBookingItems).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ParsialFabricBookingItemsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ParsialFabricBookingItems
       
        [HttpPost]
        public async Task<IActionResult> PostParsialFabricBookingItems([FromBody] TabInitailOrderNTblDetailsInfro tabInitailOrderNTblDetailsInfro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ParsialFabricBookingItems parsialFabricBookingItemsObj = new ParsialFabricBookingItems();

            parsialFabricBookingItemsObj.jobNo = tabInitailOrderNTblDetailsInfro.jobNo;
            parsialFabricBookingItemsObj.bookingMasterId = tabInitailOrderNTblDetailsInfro.bookingMasterId;
 
            parsialFabricBookingItemsObj.poNumber = tabInitailOrderNTblDetailsInfro.PoNo;       
            parsialFabricBookingItemsObj.bodyPart = tabInitailOrderNTblDetailsInfro.BodyPart;
            parsialFabricBookingItemsObj.Item = tabInitailOrderNTblDetailsInfro.Item;
            parsialFabricBookingItemsObj.construction = tabInitailOrderNTblDetailsInfro.Composition;
            parsialFabricBookingItemsObj.composition = tabInitailOrderNTblDetailsInfro.Composition;
            parsialFabricBookingItemsObj.gsm = tabInitailOrderNTblDetailsInfro.GSM;
            parsialFabricBookingItemsObj.fabricNature = tabInitailOrderNTblDetailsInfro.FabricNature;
            parsialFabricBookingItemsObj.fabricSource = tabInitailOrderNTblDetailsInfro.FabricSource;
            parsialFabricBookingItemsObj.uom = tabInitailOrderNTblDetailsInfro.UOM;
            try
            {
                _context.ParsialFabricBookingItems.Add(parsialFabricBookingItemsObj);
                _context.SaveChanges();
                int id = parsialFabricBookingItemsObj.id;
            }
            catch(Exception e)
            {
               var message= e.Message;
            }
       

            return CreatedAtAction("GetParsialFabricBookingItems", new { id = parsialFabricBookingItemsObj.id}, parsialFabricBookingItemsObj);
        }
        //[HttpPost]
        //public async Task<IActionResult> PostParsialFabricBookingItems([FromBody] TabInitailOrderNTblDetailsInfro tabInitailOrderNTblDetailsInfro)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    ParsialFabricBookingItems parsialFabricBookingItemsObj = new ParsialFabricBookingItems();
        //    var orderId = _context.TblInitialOrder.Where(w => w.JobNo == tabInitailOrderNTblDetailsInfro.jobNo)
        //        .Select(s => s.OrderAutoId).FirstOrDefault();
        //    parsialFabricBookingItemsObj.orderId = orderId;
        //    parsialFabricBookingItemsObj.poNumber = tabInitailOrderNTblDetailsInfro.PoNo;
        //    //parsialFabricBookingItemsObj.ItemColor = tabInitailOrderNTblDetailsInfro.Item;
        //    parsialFabricBookingItemsObj.bodyPart = tabInitailOrderNTblDetailsInfro.BodyPart;
        //    parsialFabricBookingItemsObj.construction= tabInitailOrderNTblDetailsInfro.Composition;
        //    parsialFabricBookingItemsObj.composition = tabInitailOrderNTblDetailsInfro.Composition;
        //    parsialFabricBookingItemsObj.gsm = tabInitailOrderNTblDetailsInfro.GSM;
        //    parsialFabricBookingItemsObj.gmtsColor = tabInitailOrderNTblDetailsInfro.Gmts_color;
        //    parsialFabricBookingItemsObj.itemColor = tabInitailOrderNTblDetailsInfro.Items_color;
        //    parsialFabricBookingItemsObj.dia = tabInitailOrderNTblDetailsInfro.Dia;
        //    parsialFabricBookingItemsObj.woQnty = tabInitailOrderNTblDetailsInfro.woQnty;
        //    parsialFabricBookingItemsObj.adjQnty = tabInitailOrderNTblDetailsInfro.Adj_Qnty;
        //    parsialFabricBookingItemsObj.acWoQnty = tabInitailOrderNTblDetailsInfro.Ac_wo_qnty;
        //    parsialFabricBookingItemsObj.rate = tabInitailOrderNTblDetailsInfro.Rate;
        //    parsialFabricBookingItemsObj.amount = tabInitailOrderNTblDetailsInfro.Amount;
        //    return CreatedAtAction("GetParsialFabricBookingItems", new { id = tabInitailOrderNTblDetailsInfro.Id }, tabInitailOrderNTblDetailsInfro);
        //}
        // DELETE: api/ParsialFabricBookingItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteParsialFabricBookingItems([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var parsialFabricBookingItems = await _context.ParsialFabricBookingItems.FindAsync(id);
            if (parsialFabricBookingItems == null)
            {
                return NotFound();
            }

            _context.ParsialFabricBookingItems.Remove(parsialFabricBookingItems);
            await _context.SaveChangesAsync();

            return Ok(parsialFabricBookingItems);
        }

        private bool ParsialFabricBookingItemsExists(int id)
        {
            return _context.ParsialFabricBookingItems.Any(e => e.id == id);
        }
    }
}