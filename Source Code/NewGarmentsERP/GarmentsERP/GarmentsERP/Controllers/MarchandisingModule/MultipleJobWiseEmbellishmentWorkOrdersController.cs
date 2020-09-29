using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule;

namespace GarmentsERP.Controllers.MarchandisingModule
{
    [Route("api/[controller]")]
    [ApiController]
    public class MultipleJobWiseEmbellishmentWorkOrdersController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public MultipleJobWiseEmbellishmentWorkOrdersController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MultipleJobWiseEmbellishmentWorkOrders
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MultipleJobWiseEmbellishmentWorkOrder>>> GetMultipleJobWiseEmbellishmentWorkOrder()
        {
            return await _context.MultipleJobWiseEmbellishmentWorkOrder.ToListAsync();
        }

        // GET: api/MultipleJobWiseEmbellishmentWorkOrders/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MultipleJobWiseEmbellishmentWorkOrder>> GetMultipleJobWiseEmbellishmentWorkOrder(int id)
        {
            var multipleJobWiseEmbellishmentWorkOrder = await _context.MultipleJobWiseEmbellishmentWorkOrder.FindAsync(id);

            if (multipleJobWiseEmbellishmentWorkOrder == null)
            {
                return NotFound();
            }

            return multipleJobWiseEmbellishmentWorkOrder;
        }

        // PUT: api/MultipleJobWiseEmbellishmentWorkOrders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMultipleJobWiseEmbellishmentWorkOrder(int id, MultipleJobWiseEmbellishmentWorkOrder multipleJobWiseEmbellishmentWorkOrder)
        {
            if (id != multipleJobWiseEmbellishmentWorkOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(multipleJobWiseEmbellishmentWorkOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MultipleJobWiseEmbellishmentWorkOrderExists(id))
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

        // POST: api/MultipleJobWiseEmbellishmentWorkOrders
        [HttpPost]
        public async Task<ActionResult<MultipleJobWiseEmbellishmentWorkOrder>> PostMultipleJobWiseEmbellishmentWorkOrder(MultipleJobWiseEmbellishmentWorkOrder multipleJobWiseEmbellishmentWorkOrder)
        {


            string CurrentYear = DateTime.Now.Year.ToString();
            var lastTwoDigit = CurrentYear.Substring(2);
            var WoNo = "MKL" + "-EB-" + lastTwoDigit + "000" + _context.MultipleJobWiseEmbellishmentWorkOrder.Count();
            multipleJobWiseEmbellishmentWorkOrder.WoNo = WoNo;

            _context.MultipleJobWiseEmbellishmentWorkOrder.Add(multipleJobWiseEmbellishmentWorkOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMultipleJobWiseEmbellishmentWorkOrder", new { id = multipleJobWiseEmbellishmentWorkOrder.Id }, multipleJobWiseEmbellishmentWorkOrder);
        }

        // DELETE: api/MultipleJobWiseEmbellishmentWorkOrders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MultipleJobWiseEmbellishmentWorkOrder>> DeleteMultipleJobWiseEmbellishmentWorkOrder(int id)
        {
            var multipleJobWiseEmbellishmentWorkOrder = await _context.MultipleJobWiseEmbellishmentWorkOrder.FindAsync(id);
            if (multipleJobWiseEmbellishmentWorkOrder == null)
            {
                return NotFound();
            }

            _context.MultipleJobWiseEmbellishmentWorkOrder.Remove(multipleJobWiseEmbellishmentWorkOrder);
            await _context.SaveChangesAsync();

            return multipleJobWiseEmbellishmentWorkOrder;
        }

        private bool MultipleJobWiseEmbellishmentWorkOrderExists(int id)
        {
            return _context.MultipleJobWiseEmbellishmentWorkOrder.Any(e => e.Id == id);
        }
    }
}
