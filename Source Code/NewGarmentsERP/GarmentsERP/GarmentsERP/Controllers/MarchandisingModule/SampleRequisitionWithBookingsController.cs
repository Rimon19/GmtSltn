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
    public class SampleRequisitionWithBookingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SampleRequisitionWithBookingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SampleRequisitionWithBookings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SampleRequisitionWithBooking>>> GetSampleRequisitionWithBooking()
        {
            return await _context.SampleRequisitionWithBooking.ToListAsync();
        }

        // GET: api/SampleRequisitionWithBookings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SampleRequisitionWithBooking>> GetSampleRequisitionWithBooking(int id)
        {
            var sampleRequisitionWithBooking = await _context.SampleRequisitionWithBooking.FindAsync(id);

            if (sampleRequisitionWithBooking == null)
            {
                return NotFound();
            }

            return sampleRequisitionWithBooking;
        }

        // PUT: api/SampleRequisitionWithBookings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSampleRequisitionWithBooking(int id, SampleRequisitionWithBooking sampleRequisitionWithBooking)
        {
            if (id != sampleRequisitionWithBooking.Id)
            {
                return BadRequest();
            }

            _context.Entry(sampleRequisitionWithBooking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SampleRequisitionWithBookingExists(id))
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

        // POST: api/SampleRequisitionWithBookings
        [HttpPost]
        public async Task<ActionResult<SampleRequisitionWithBooking>> PostSampleRequisitionWithBooking(SampleRequisitionWithBooking sampleRequisitionWithBooking)
        {
            string CurrentYear = DateTime.Now.Year.ToString();
            var lastTwoDigit = CurrentYear.Substring(2);
            var requisitionId = "MKL-" +lastTwoDigit + "000" + _context.SampleRequisitionWithBooking.Count();
            sampleRequisitionWithBooking.RequisitionId = requisitionId;
            _context.SampleRequisitionWithBooking.Add(sampleRequisitionWithBooking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSampleRequisitionWithBooking", new { id = sampleRequisitionWithBooking.Id }, sampleRequisitionWithBooking);
        }

        // DELETE: api/SampleRequisitionWithBookings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SampleRequisitionWithBooking>> DeleteSampleRequisitionWithBooking(int id)
        {
            var sampleRequisitionWithBooking = await _context.SampleRequisitionWithBooking.FindAsync(id);
            if (sampleRequisitionWithBooking == null)
            {
                return NotFound();
            }

            _context.SampleRequisitionWithBooking.Remove(sampleRequisitionWithBooking);
            await _context.SaveChangesAsync();

            return sampleRequisitionWithBooking;
        }

        private bool SampleRequisitionWithBookingExists(int id)
        {
            return _context.SampleRequisitionWithBooking.Any(e => e.Id == id);
        }
    }
}
