using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarmentsERP.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GarmentsERP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WashCostPreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public WashCostPreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/WashCostPreCostings
        [HttpGet]
        public IEnumerable<WashCostPreCosting> GetWashCostPreCosting()
        {
            return _context.WashCostPreCosting;
        }

        // GET: api/WashCostPreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetWashCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var washCostPreCosting = await _context.WashCostPreCosting.FindAsync(id);

            if (washCostPreCosting == null)
            {
                return NotFound();
            }

            return Ok(washCostPreCosting);
        }
        /*Get washCostPreCostingsByPreCostId*/
        // GET: api/WashCostPreCostings/washCostPreCostingsByPreCostId
        [HttpGet("washCostPreCostingsByPreCostId/{id}")]
        public IActionResult GetWashCostPreCostingByPreCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var washCostPreCostingsByPreCostId = _context.WashCostPreCosting.Where(x => x.PrecostingId == id);


            if (washCostPreCostingsByPreCostId == null)
            {
                return NotFound();
            }


            return Ok(washCostPreCostingsByPreCostId);

        }


        // PUT: api/WashCostPreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWashCostPreCosting([FromRoute] int id, [FromBody] WashCostPreCosting washCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != washCostPreCosting.Id)
            {
                return BadRequest();
            }

            _context.Entry(washCostPreCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WashCostPreCostingExists(id))
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

        // POST: api/WashCostPreCostings
        [HttpPost]
        public async Task<IActionResult> PostWashCostPreCosting([FromBody] WashCostPreCosting washCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.WashCostPreCosting.Add(washCostPreCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWashCostPreCosting", new { id = washCostPreCosting.Id }, washCostPreCosting);
        }

        // DELETE: api/WashCostPreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWashCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var washCostPreCosting = await _context.WashCostPreCosting.FindAsync(id);
            if (washCostPreCosting == null)
            {
                return NotFound();
            }

            _context.WashCostPreCosting.Remove(washCostPreCosting);
            await _context.SaveChangesAsync();

            return Ok(washCostPreCosting);
        }

        private bool WashCostPreCostingExists(int id)
        {
            return _context.WashCostPreCosting.Any(e => e.Id == id);
        }
    }
}