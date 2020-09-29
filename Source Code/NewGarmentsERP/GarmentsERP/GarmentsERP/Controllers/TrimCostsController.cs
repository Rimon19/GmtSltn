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
    public class TrimCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public TrimCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/TrimCosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TrimCost>>> GetTrimCost()
        {
            return await _context.TrimCost.ToListAsync();
        }

        // GET: api/TrimCosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrimCost>> GetTrimCost(int id)
        {
            var trimCost = await _context.TrimCost.FindAsync(id);

            if (trimCost == null)
            {
                return NotFound();
            }

            return trimCost;
        }

        // PUT: api/TrimCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrimCost(int id, TrimCost trimCost)
        {
            if (id != trimCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(trimCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrimCostExists(id))
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

        // POST: api/TrimCosts
        [HttpPost]
        public async Task<ActionResult<TrimCost>> PostTrimCost(TrimCost trimCost)
        {
            _context.TrimCost.Add(trimCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrimCost", new { id = trimCost.Id }, trimCost);
        }

        // DELETE: api/TrimCosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrimCost>> DeleteTrimCost(int id)
        {
            var trimCost = await _context.TrimCost.FindAsync(id);
            if (trimCost == null)
            {
                return NotFound();
            }

            _context.TrimCost.Remove(trimCost);
            await _context.SaveChangesAsync();

            return trimCost;
        }

        private bool TrimCostExists(int id)
        {
            return _context.TrimCost.Any(e => e.Id == id);
        }
    }
}
