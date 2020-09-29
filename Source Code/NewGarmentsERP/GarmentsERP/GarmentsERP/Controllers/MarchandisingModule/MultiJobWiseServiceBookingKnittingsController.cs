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
    public class MultiJobWiseServiceBookingKnittingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public MultiJobWiseServiceBookingKnittingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MultiJobWiseServiceBookingKnittings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MultiJobWiseServiceBookingKnitting>>> GetMultiJobWiseServiceBookingKnitting()
        {
            return await _context.MultiJobWiseServiceBookingKnitting.ToListAsync();
        }

        // GET: api/MultiJobWiseServiceBookingKnittings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MultiJobWiseServiceBookingKnitting>> GetMultiJobWiseServiceBookingKnitting(int id)
        {
            var multiJobWiseServiceBookingKnitting = await _context.MultiJobWiseServiceBookingKnitting.FindAsync(id);

            if (multiJobWiseServiceBookingKnitting == null)
            {
                return NotFound();
            }

            return multiJobWiseServiceBookingKnitting;
        }

        // PUT: api/MultiJobWiseServiceBookingKnittings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMultiJobWiseServiceBookingKnitting(int id, MultiJobWiseServiceBookingKnitting multiJobWiseServiceBookingKnitting)
        {
            if (id != multiJobWiseServiceBookingKnitting.Id)
            {
                return BadRequest();
            }

            _context.Entry(multiJobWiseServiceBookingKnitting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MultiJobWiseServiceBookingKnittingExists(id))
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

        // POST: api/MultiJobWiseServiceBookingKnittings
        [HttpPost]
        public async Task<ActionResult<MultiJobWiseServiceBookingKnitting>> PostMultiJobWiseServiceBookingKnitting(MultiJobWiseServiceBookingKnitting multiJobWiseServiceBookingKnitting)
        {
            _context.MultiJobWiseServiceBookingKnitting.Add(multiJobWiseServiceBookingKnitting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMultiJobWiseServiceBookingKnitting", new { id = multiJobWiseServiceBookingKnitting.Id }, multiJobWiseServiceBookingKnitting);
        }

        // DELETE: api/MultiJobWiseServiceBookingKnittings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MultiJobWiseServiceBookingKnitting>> DeleteMultiJobWiseServiceBookingKnitting(int id)
        {
            var multiJobWiseServiceBookingKnitting = await _context.MultiJobWiseServiceBookingKnitting.FindAsync(id);
            if (multiJobWiseServiceBookingKnitting == null)
            {
                return NotFound();
            }

            _context.MultiJobWiseServiceBookingKnitting.Remove(multiJobWiseServiceBookingKnitting);
            await _context.SaveChangesAsync();

            return multiJobWiseServiceBookingKnitting;
        }

        private bool MultiJobWiseServiceBookingKnittingExists(int id)
        {
            return _context.MultiJobWiseServiceBookingKnitting.Any(e => e.Id == id);
        }
    }
}
