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
    public class EmbellishmentCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public EmbellishmentCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/EmbellishmentCosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmbellishmentCost>>> GetEmbellishmentCost()
        {
            return await _context.EmbellishmentCost.ToListAsync();
        }

        // GET: api/EmbellishmentCosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmbellishmentCost>> GetEmbellishmentCost(int id)
        {
            var embellishmentCost = await _context.EmbellishmentCost.FindAsync(id);

            if (embellishmentCost == null)
            {
                return NotFound();
            }

            return embellishmentCost;
        }

        // PUT: api/EmbellishmentCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmbellishmentCost(int id, EmbellishmentCost embellishmentCost)
        {
            if (id != embellishmentCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(embellishmentCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmbellishmentCostExists(id))
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

        // POST: api/EmbellishmentCosts
        [HttpPost]
        public async Task<ActionResult<EmbellishmentCost>> PostEmbellishmentCost(EmbellishmentCost embellishmentCost)
        {
            _context.EmbellishmentCost.Add(embellishmentCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmbellishmentCost", new { id = embellishmentCost.Id }, embellishmentCost);
        }

        // DELETE: api/EmbellishmentCosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmbellishmentCost>> DeleteEmbellishmentCost(int id)
        {
            var embellishmentCost = await _context.EmbellishmentCost.FindAsync(id);
            if (embellishmentCost == null)
            {
                return NotFound();
            }

            _context.EmbellishmentCost.Remove(embellishmentCost);
            await _context.SaveChangesAsync();

            return embellishmentCost;
        }

        private bool EmbellishmentCostExists(int id)
        {
            return _context.EmbellishmentCost.Any(e => e.Id == id);
        }
    }
}
