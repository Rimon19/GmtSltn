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
    public class OtherCostPreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public OtherCostPreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/OtherCostPreCostings
        [HttpGet]
        public IEnumerable<OtherCostPreCosting> GetOtherCostPreCosting()
        {
            return _context.OtherCostPreCosting;
        }

        // GET: api/OtherCostPreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetOtherCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var otherCostPreCosting = await _context.OtherCostPreCosting.FindAsync(id);

            if (otherCostPreCosting == null)
            {
                return NotFound();
            }

            return Ok(otherCostPreCosting);
        }

        // PUT: api/OtherCostPreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOtherCostPreCosting([FromRoute] int id, [FromBody] OtherCostPreCosting otherCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != otherCostPreCosting.Id)
            {
                return BadRequest();
            }

            _context.Entry(otherCostPreCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OtherCostPreCostingExists(id))
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

        /*Get commissionCostPreCostingsByPreCostId*/
        // GET: api/OtherCostPreCostings/otherCostPreCostingsByPreCostId
        [HttpGet("otherCostPreCostingsByPreCostId/{id}")]
        public IActionResult GetOtherCostPreCostingsByPreCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var otherCostPreCostingsByPreCostId = _context.OtherCostPreCosting.Where(x => x.PreCostingId == id);


            if (otherCostPreCostingsByPreCostId == null)
            {
                return NotFound();
            }


            return Ok(otherCostPreCostingsByPreCostId);

        }

        // POST: api/OtherCostPreCostings
        [HttpPost]
        public async Task<IActionResult> PostOtherCostPreCosting([FromBody] OtherCostPreCosting otherCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.OtherCostPreCosting.Add(otherCostPreCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOtherCostPreCosting", new { id = otherCostPreCosting.Id }, otherCostPreCosting);
        }

        // DELETE: api/OtherCostPreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOtherCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var otherCostPreCosting = await _context.OtherCostPreCosting.FindAsync(id);
            if (otherCostPreCosting == null)
            {
                return NotFound();
            }

            _context.OtherCostPreCosting.Remove(otherCostPreCosting);
            await _context.SaveChangesAsync();

            return Ok(otherCostPreCosting);
        }

        private bool OtherCostPreCostingExists(int id)
        {
            return _context.OtherCostPreCosting.Any(e => e.Id == id);
        }
    }
}