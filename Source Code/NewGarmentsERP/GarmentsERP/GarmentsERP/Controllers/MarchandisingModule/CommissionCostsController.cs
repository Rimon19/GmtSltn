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
    public class CommissionCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public CommissionCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/CommissionCosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CommissionCost>>> GetCommissionCost()
        {
            return await _context.CommissionCost.ToListAsync();
        }

        // GET: api/CommissionCosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CommissionCost>> GetCommissionCost(int id)
        {
            var commissionCost = await _context.CommissionCost.FindAsync(id);

            if (commissionCost == null)
            {
                return NotFound();
            }

            return commissionCost;
        }

        // PUT: api/CommissionCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommissionCost(int id, CommissionCost commissionCost)
        {
            if (id != commissionCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(commissionCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommissionCostExists(id))
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

        // POST: api/CommissionCosts
        [HttpPost]
        public async Task<ActionResult<CommissionCost>> PostCommissionCost(CommissionCost commissionCost)
        {
            _context.CommissionCost.Add(commissionCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommissionCost", new { id = commissionCost.Id }, commissionCost);
        }

        // DELETE: api/CommissionCosts/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CommissionCost>> DeleteCommissionCost(int id)
        {
            var commissionCost = await _context.CommissionCost.FindAsync(id);
            if (commissionCost == null)
            {
                return NotFound();
            }

            _context.CommissionCost.Remove(commissionCost);
            await _context.SaveChangesAsync();

            return commissionCost;
        }

        private bool CommissionCostExists(int id)
        {
            return _context.CommissionCost.Any(e => e.Id == id);
        }
    }
}
