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
    public class MultipleJobWiseShortTrimsBookingV2Controller : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public MultipleJobWiseShortTrimsBookingV2Controller(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/MultipleJobWiseShortTrimsBookingV2
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MultipleJobWiseShortTrimsBookingV2>>> GetMultipleJobWiseShortTrimsBookingV2()
        {
            return await _context.MultipleJobWiseShortTrimsBookingV2.ToListAsync();
        }

        // GET: api/MultipleJobWiseShortTrimsBookingV2/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MultipleJobWiseShortTrimsBookingV2>> GetMultipleJobWiseShortTrimsBookingV2(int id)
        {
            var multipleJobWiseShortTrimsBookingV2 = await _context.MultipleJobWiseShortTrimsBookingV2.FindAsync(id);

            if (multipleJobWiseShortTrimsBookingV2 == null)
            {
                return NotFound();
            }

            return multipleJobWiseShortTrimsBookingV2;
        }

        // PUT: api/MultipleJobWiseShortTrimsBookingV2/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMultipleJobWiseShortTrimsBookingV2(int id, MultipleJobWiseShortTrimsBookingV2 multipleJobWiseShortTrimsBookingV2)
        {
            if (id != multipleJobWiseShortTrimsBookingV2.Id)
            {
                return BadRequest();
            }

            _context.Entry(multipleJobWiseShortTrimsBookingV2).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MultipleJobWiseShortTrimsBookingV2Exists(id))
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

        // POST: api/MultipleJobWiseShortTrimsBookingV2
        [HttpPost]
        public async Task<ActionResult<MultipleJobWiseShortTrimsBookingV2>> PostMultipleJobWiseShortTrimsBookingV2(MultipleJobWiseShortTrimsBookingV2 multipleJobWiseShortTrimsBookingV2)
        {
            var y = DateTime.Now.Year;
            var year = Convert.ToDouble(y) % 100;
            multipleJobWiseShortTrimsBookingV2.BookingNo = "MKL-" + "TB" + Convert.ToString(year) + "-0" + _context.MultipleJobWiseShortTrimsBookingV2.Count();
            _context.MultipleJobWiseShortTrimsBookingV2.Add(multipleJobWiseShortTrimsBookingV2);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMultipleJobWiseShortTrimsBookingV2", new { id = multipleJobWiseShortTrimsBookingV2.Id }, multipleJobWiseShortTrimsBookingV2);
        }

        // DELETE: api/MultipleJobWiseShortTrimsBookingV2/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<MultipleJobWiseShortTrimsBookingV2>> DeleteMultipleJobWiseShortTrimsBookingV2(int id)
        {
            var multipleJobWiseShortTrimsBookingV2 = await _context.MultipleJobWiseShortTrimsBookingV2.FindAsync(id);
            if (multipleJobWiseShortTrimsBookingV2 == null)
            {
                return NotFound();
            }

            _context.MultipleJobWiseShortTrimsBookingV2.Remove(multipleJobWiseShortTrimsBookingV2);
            await _context.SaveChangesAsync();

            return multipleJobWiseShortTrimsBookingV2;
        }

        private bool MultipleJobWiseShortTrimsBookingV2Exists(int id)
        {
            return _context.MultipleJobWiseShortTrimsBookingV2.Any(e => e.Id == id);
        }
    }
}
