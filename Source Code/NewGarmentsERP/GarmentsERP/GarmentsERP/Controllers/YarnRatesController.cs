using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class YarnRatesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public YarnRatesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/YarnRates
        [HttpGet]
        public async Task<ActionResult<IEnumerable<YarnRate>>> GetYarnRate()
        {
            return await _context.YarnRate.ToListAsync();
        }

        // GET: api/YarnRates/5
        [HttpGet("{id}")]
        public async Task<ActionResult<YarnRate>> GetYarnRate(int id)
        {
            var yarnRate = await _context.YarnRate.FindAsync(id);

            if (yarnRate == null)
            {
                return NotFound();
            }

            return yarnRate;
        }

        // PUT: api/YarnRates/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutYarnRate(int id, YarnRate yarnRate)
        {
            if (id != yarnRate.Id)
            {
                return BadRequest();
            }

            _context.Entry(yarnRate).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!YarnRateExists(id))
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

        // POST: api/YarnRates
        [HttpPost]
        public async Task<ActionResult<YarnRate>> PostYarnRate(YarnRate yarnRate)
        {
            _context.YarnRate.Add(yarnRate);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetYarnRate", new { id = yarnRate.Id }, yarnRate);
        }

        // DELETE: api/YarnRates/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<YarnRate>> DeleteYarnRate(int id)
        {
            var yarnRate = await _context.YarnRate.FindAsync(id);
            if (yarnRate == null)
            {
                return NotFound();
            }

            _context.YarnRate.Remove(yarnRate);
            await _context.SaveChangesAsync();

            return yarnRate;
        }

        private bool YarnRateExists(int id)
        {
            return _context.YarnRate.Any(e => e.Id == id);
        }
    }
}
