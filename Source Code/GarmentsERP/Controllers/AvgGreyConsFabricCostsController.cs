using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GarmentsERP.Model;

namespace API.Collection2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvgGreyConsFabricCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public AvgGreyConsFabricCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/AvgGreyConsFabricCosts
        [HttpGet]
        public IEnumerable<AvgGreyConsFabricCost> GetAvgGreyConsFabricCost()
        {
            return _context.AvgGreyConsFabricCost;
        }

        // GET: api/AvgGreyConsFabricCosts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAvgGreyConsFabricCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var avgGreyConsFabricCost = await _context.AvgGreyConsFabricCost.FindAsync(id);

            if (avgGreyConsFabricCost == null)
            {
                return NotFound();
            }

            return Ok(avgGreyConsFabricCost);
        }

        // Search avgGreyConsFabricCosts by PrecostingId
        // GET: api/AvgGreyConsFabricCosts/PrecostingId/5
        [HttpGet("PrecostingId/{id}")]
        public async Task<IActionResult> GetAvgGreyConsFabricCostByPrecostingId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var avgGreyConsFabricCost = await _context.AvgGreyConsFabricCost
                                             .Where(x => x.PrecostingId == id)
                                             .ToListAsync();

            if (avgGreyConsFabricCost == null)
            {
                return NotFound();
            }

            return Ok(avgGreyConsFabricCost);
        }


        // GET: api/AvgGreyConsFabricCosts/FebricCostId/5
        [HttpGet("FebricCostId/{id}")]
        public IActionResult GetAvgGreyConsFabricCostByfebricCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var avgGreyConsFabricCost = _context.AvgGreyConsFabricCost.Where(x => x.FebricCostId == id);

            if (avgGreyConsFabricCost == null)
            {
                return NotFound();
            }

            return Ok(avgGreyConsFabricCost);
        }

        // PUT: api/AvgGreyConsFabricCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAvgGreyConsFabricCost([FromRoute] int id, [FromBody] AvgGreyConsFabricCost avgGreyConsFabricCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != avgGreyConsFabricCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(avgGreyConsFabricCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvgGreyConsFabricCostExists(id))
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

        // POST: api/AvgGreyConsFabricCosts
        [HttpPost]
        public async Task<IActionResult> PostAvgGreyConsFabricCost([FromBody] AvgGreyConsFabricCost avgGreyConsFabricCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.AvgGreyConsFabricCost.Add(avgGreyConsFabricCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAvgGreyConsFabricCost", new { id = avgGreyConsFabricCost.Id }, avgGreyConsFabricCost);
        }

        // POST: api/AvgGreyConsFabricCosts/PrecostingId/FebricCostId
        [HttpPost("{PrecostingId}/{FebricCostId}")]
        public async Task<IActionResult> PostAvgGreyConsFabricCost2([FromRoute] int PrecostingId, [FromRoute] int FebricCostId, [FromBody] AvgGreyConsFabricCost[] avgGreyConsFabricCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            foreach (var item in avgGreyConsFabricCost)
            {
                item.PrecostingId = PrecostingId;
                item.FebricCostId = FebricCostId;
                _context.AvgGreyConsFabricCost.Add(item);
            }

            await _context.SaveChangesAsync();

            return Ok(200);
        }
        
        // DELETE: api/AvgGreyConsFabricCosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvgGreyConsFabricCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var avgGreyConsFabricCost = await _context.AvgGreyConsFabricCost.FindAsync(id);
            if (avgGreyConsFabricCost == null)
            {
                return NotFound();
            }

            _context.AvgGreyConsFabricCost.Remove(avgGreyConsFabricCost);
            await _context.SaveChangesAsync();

            return Ok(avgGreyConsFabricCost);
        }

        // DELETE: api/AvgGreyConsFabricCosts/ByFabricCost/5
        [HttpDelete("ByFabricCost/{id}")]
        public  IActionResult DeleteAvgGreyConsByFabricCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.AvgGreyConsFabricCost.RemoveRange(_context.AvgGreyConsFabricCost.Where(x => x.FebricCostId == id));

            _context.SaveChanges();

            return Ok(200);
        }

        private bool AvgGreyConsFabricCostExists(int id)
        {
            return _context.AvgGreyConsFabricCost.Any(e => e.Id == id);
        }
    }
}