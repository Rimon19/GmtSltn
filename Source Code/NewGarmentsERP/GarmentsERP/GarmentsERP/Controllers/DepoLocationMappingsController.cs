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
    public class DepoLocationMappingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public DepoLocationMappingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/DepoLocationMappings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DepoLocationMapping>>> GetDepoLocationMapping()
        {
            return await _context.DepoLocationMapping.ToListAsync();
        }

        // GET: api/DepoLocationMappings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DepoLocationMapping>> GetDepoLocationMapping(int id)
        {
            var depoLocationMapping = await _context.DepoLocationMapping.FindAsync(id);

            if (depoLocationMapping == null)
            {
                return NotFound();
            }

            return depoLocationMapping;
        }

        // PUT: api/DepoLocationMappings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepoLocationMapping(int id, DepoLocationMapping depoLocationMapping)
        {
            if (id != depoLocationMapping.Id)
            {
                return BadRequest();
            }

            _context.Entry(depoLocationMapping).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepoLocationMappingExists(id))
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

        // POST: api/DepoLocationMappings
        [HttpPost]
        public async Task<ActionResult<DepoLocationMapping>> PostDepoLocationMapping(DepoLocationMapping depoLocationMapping)
        {
            _context.DepoLocationMapping.Add(depoLocationMapping);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepoLocationMapping", new { id = depoLocationMapping.Id }, depoLocationMapping);
        }

        // DELETE: api/DepoLocationMappings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DepoLocationMapping>> DeleteDepoLocationMapping(int id)
        {
            var depoLocationMapping = await _context.DepoLocationMapping.FindAsync(id);
            if (depoLocationMapping == null)
            {
                return NotFound();
            }

            _context.DepoLocationMapping.Remove(depoLocationMapping);
            await _context.SaveChangesAsync();

            return depoLocationMapping;
        }

        private bool DepoLocationMappingExists(int id)
        {
            return _context.DepoLocationMapping.Any(e => e.Id == id);
        }
    }
}
