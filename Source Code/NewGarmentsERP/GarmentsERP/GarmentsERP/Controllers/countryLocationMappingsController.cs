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
    public class countryLocationMappingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public countryLocationMappingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/countryLocationMappings
        [HttpGet]
        public IEnumerable<countryLocationMapping> GetCountryLocationMapping()
        {
            return  _context.CountryLocationMapping;
        }

        // GET: api/countryLocationMappings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<countryLocationMapping>> GetcountryLocationMapping(int id)
        {
            var countryLocationMapping = await _context.CountryLocationMapping.FindAsync(id);

            if (countryLocationMapping == null)
            {
                return NotFound();
            }

            return countryLocationMapping;
        }

        // PUT: api/countryLocationMappings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutcountryLocationMapping(int id, countryLocationMapping countryLocationMapping)
        {
            if (id != countryLocationMapping.Id)
            {
                return BadRequest();
            }

            _context.Entry(countryLocationMapping).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!countryLocationMappingExists(id))
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

        // POST: api/countryLocationMappings
        [HttpPost]
        public async Task<ActionResult<countryLocationMapping>> PostcountryLocationMapping(countryLocationMapping countryLocationMapping)
        {
            _context.CountryLocationMapping.Add(countryLocationMapping);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetcountryLocationMapping", new { id = countryLocationMapping.Id }, countryLocationMapping);
        }

        // DELETE: api/countryLocationMappings/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<countryLocationMapping>> DeletecountryLocationMapping(int id)
        {
            var countryLocationMapping = await _context.CountryLocationMapping.FindAsync(id);
            if (countryLocationMapping == null)
            {
                return NotFound();
            }

            _context.CountryLocationMapping.Remove(countryLocationMapping);
            await _context.SaveChangesAsync();

            return countryLocationMapping;
        }

        private bool countryLocationMappingExists(int id)
        {
            return _context.CountryLocationMapping.Any(e => e.Id == id);
        }
    }
}
