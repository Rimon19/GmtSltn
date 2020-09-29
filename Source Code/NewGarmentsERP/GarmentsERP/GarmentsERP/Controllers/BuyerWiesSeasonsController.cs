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
    public class BuyerWiesSeasonsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public BuyerWiesSeasonsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/BuyerWiesSeasons
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BuyerWiesSeason>>> GetBuyerWiesSeason()
        {
            return await _context.BuyerWiesSeason.ToListAsync();
        }

        // GET: api/BuyerWiesSeasons/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BuyerWiesSeason>> GetBuyerWiesSeason(int id)
        {
            var buyerWiesSeason = await _context.BuyerWiesSeason.FindAsync(id);

            if (buyerWiesSeason == null)
            {
                return NotFound();
            }

            return buyerWiesSeason;
        }

        // PUT: api/BuyerWiesSeasons/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBuyerWiesSeason(int id, BuyerWiesSeason buyerWiesSeason)
        {
            if (id != buyerWiesSeason.Id)
            {
                return BadRequest();
            }

            _context.Entry(buyerWiesSeason).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BuyerWiesSeasonExists(id))
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

        // POST: api/BuyerWiesSeasons
        [HttpPost]
        public async Task<ActionResult<BuyerWiesSeason>> PostBuyerWiesSeason(BuyerWiesSeason buyerWiesSeason)
        {
            _context.BuyerWiesSeason.Add(buyerWiesSeason);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBuyerWiesSeason", new { id = buyerWiesSeason.Id }, buyerWiesSeason);
        }

        // DELETE: api/BuyerWiesSeasons/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BuyerWiesSeason>> DeleteBuyerWiesSeason(int id)
        {
            var buyerWiesSeason = await _context.BuyerWiesSeason.FindAsync(id);
            if (buyerWiesSeason == null)
            {
                return NotFound();
            }

            _context.BuyerWiesSeason.Remove(buyerWiesSeason);
            await _context.SaveChangesAsync();

            return buyerWiesSeason;
        }

        private bool BuyerWiesSeasonExists(int id)
        {
            return _context.BuyerWiesSeason.Any(e => e.Id == id);
        }
    }
}
