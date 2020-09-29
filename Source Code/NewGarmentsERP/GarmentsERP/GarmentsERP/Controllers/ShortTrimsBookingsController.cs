using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;
using GarmentsERP.Model.MarchandisingModule;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShortTrimsBookingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ShortTrimsBookingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ShortTrimsBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShortTrimsBooking>>> GetShortTrimsBooking()
        {
            return await _context.ShortTrimsBooking.ToListAsync();
        }

        // GET: api/ShortTrimsBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ShortTrimsBooking>> GetShortTrimsBooking(int id)
        {
            var shortTrimsBooking = await _context.ShortTrimsBooking.FindAsync(id);

            if (shortTrimsBooking == null)
            {
                return NotFound();
            }

            return shortTrimsBooking;
        }

        // PUT: api/ShortTrimsBookings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutShortTrimsBooking(int id, ShortTrimsBooking shortTrimsBooking)
        {
            if (id != shortTrimsBooking.Id)
            {
                return BadRequest();
            }

            _context.Entry(shortTrimsBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShortTrimsBookingExists(id))
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

        // POST: api/ShortTrimsBookings
        [HttpPost]
        public async Task<ActionResult<ShortTrimsBooking>> PostShortTrimsBooking(ShortTrimsBooking shortTrimsBooking)
        {
            var a = DateTime.Now.Year;
            double year = Convert.ToDouble(a) % 100;
            shortTrimsBooking.BookingNo = "MKL-" +"TB"+Convert.ToString(year) + "-0" + _context.ShortTrimsBooking.Count();
            _context.ShortTrimsBooking.Add(shortTrimsBooking);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetShortTrimsBooking", new { id = shortTrimsBooking.Id }, shortTrimsBooking);
        }

        // DELETE: api/ShortTrimsBookings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ShortTrimsBooking>> DeleteShortTrimsBooking(int id)
        {
            var shortTrimsBooking = await _context.ShortTrimsBooking.FindAsync(id);
            if (shortTrimsBooking == null)
            {
                return NotFound();
            }

            _context.ShortTrimsBooking.Remove(shortTrimsBooking);
            await _context.SaveChangesAsync();

            return shortTrimsBooking;
        }

        private bool ShortTrimsBookingExists(int id)
        {
            return _context.ShortTrimsBooking.Any(e => e.Id == id);
        }
    }
}
