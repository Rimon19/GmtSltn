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
    public class CommissionCostPreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CommissionCostPreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CommissionCostPreCostings
        [HttpGet]
        public IEnumerable<CommissionCostPreCosting> GetCommissionCostPreCosting()
        {
            return _context.CommissionCostPreCosting;
        }

        // GET: api/CommissionCostPreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCommissionCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var commissionCostPreCosting = await _context.CommissionCostPreCosting.FindAsync(id);

            if (commissionCostPreCosting == null)
            {
                return NotFound();
            }

            return Ok(commissionCostPreCosting);
        }

        /*Get commissionCostPreCostingsByPreCostId*/
        // GET: api/CommissionCostPreCostings/commissionCostPreCostingsByPreCostId
        [HttpGet("commissionCostPreCostingsByPreCostId/{id}")]
        public IActionResult GetCommissionCostPreCostingByPreCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var commissionCostPreCostingsByPreCostId = _context.CommissionCostPreCosting.Where(x => x.PrecostingId == id);


            if (commissionCostPreCostingsByPreCostId == null)
            {
                return NotFound();
            }


            return Ok(commissionCostPreCostingsByPreCostId);

        }

        // PUT: api/CommissionCostPreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommissionCostPreCosting([FromRoute] int id, [FromBody] CommissionCostPreCosting commissionCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != commissionCostPreCosting.Id)
            {
                return BadRequest();
            }

            _context.Entry(commissionCostPreCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommissionCostPreCostingExists(id))
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

        // POST: api/CommissionCostPreCostings
        [HttpPost]
        public async Task<IActionResult> PostCommissionCostPreCosting([FromBody] CommissionCostPreCosting commissionCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CommissionCostPreCosting.Add(commissionCostPreCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommissionCostPreCosting", new { id = commissionCostPreCosting.Id }, commissionCostPreCosting);
        }

        // DELETE: api/CommissionCostPreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommissionCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var commissionCostPreCosting = await _context.CommissionCostPreCosting.FindAsync(id);
            if (commissionCostPreCosting == null)
            {
                return NotFound();
            }

            _context.CommissionCostPreCosting.Remove(commissionCostPreCosting);
            await _context.SaveChangesAsync();

            return Ok(commissionCostPreCosting);
        }

        private bool CommissionCostPreCostingExists(int id)
        {
            return _context.CommissionCostPreCosting.Any(e => e.Id == id);
        }
    }
}