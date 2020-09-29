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
    public class ConversionCostPreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ConversionCostPreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ConversionCostPreCostings
        [HttpGet]
        public IEnumerable<ConversionCostPreCosting> GetConversionCostPreCosting()
        {
            return _context.ConversionCostPreCosting;
        }

        // GET: api/ConversionCostPreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConversionCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var conversionCostPreCosting = await _context.ConversionCostPreCosting.FindAsync(id);

            if (conversionCostPreCosting == null)
            {
                return NotFound();
            }

            return Ok(conversionCostPreCosting);
        }

        // PUT: api/ConversionCostPreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConversionCostPreCosting([FromRoute] int id, [FromBody] ConversionCostPreCosting conversionCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != conversionCostPreCosting.ConversionCostId)
            {
                return BadRequest();
            }

            _context.Entry(conversionCostPreCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConversionCostPreCostingExists(id))
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

        // POST: api/ConversionCostPreCostings
        [HttpPost]
        public async Task<IActionResult> PostConversionCostPreCosting([FromBody] ConversionCostPreCosting conversionCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ConversionCostPreCosting.Add(conversionCostPreCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConversionCostPreCosting", new { id = conversionCostPreCosting.ConversionCostId }, conversionCostPreCosting);
        }

        // DELETE: api/ConversionCostPreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConversionCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var conversionCostPreCosting = await _context.ConversionCostPreCosting.FindAsync(id);
            if (conversionCostPreCosting == null)
            {
                return NotFound();
            }

            _context.ConversionCostPreCosting.Remove(conversionCostPreCosting);
            await _context.SaveChangesAsync();

            return Ok(conversionCostPreCosting);
        }

        private bool ConversionCostPreCostingExists(int id)
        {
            return _context.ConversionCostPreCosting.Any(e => e.ConversionCostId == id);
        }
    }
}