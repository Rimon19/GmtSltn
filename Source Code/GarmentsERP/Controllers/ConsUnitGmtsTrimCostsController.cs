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
    public class ConsUnitGmtsTrimCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ConsUnitGmtsTrimCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ConsUnitGmtsTrimCosts
        [HttpGet]
        public IEnumerable<ConsUnitGmtsTrimCost> GetConsUnitGmtsTrimCost()
        {
            return _context.ConsUnitGmtsTrimCost;
        }

        // GET: api/ConsUnitGmtsTrimCosts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConsUnitGmtsTrimCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consUnitGmtsTrimCost = await _context.ConsUnitGmtsTrimCost.FindAsync(id);

            if (consUnitGmtsTrimCost == null)
            {
                return NotFound();
            }

            return Ok(consUnitGmtsTrimCost);
        }

        /*get cons unit gmts filter by  by trim cost id */
        // GET: api/ConsUnitGmtsTrimCosts/TrimCostId/5
        [HttpGet("TrimCostId/{id}")]
        public IActionResult GetConsUnitGmtsTrimCostByfebricCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consUnitGmtsTrimCost = _context.ConsUnitGmtsTrimCost.Where(x => x.TrimCostId == id);

            if (consUnitGmtsTrimCost == null)
            {
                return NotFound();
            }

            return Ok(consUnitGmtsTrimCost);
        }


        // PUT: api/ConsUnitGmtsTrimCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsUnitGmtsTrimCost([FromRoute] int id, [FromBody] ConsUnitGmtsTrimCost consUnitGmtsTrimCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != consUnitGmtsTrimCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(consUnitGmtsTrimCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsUnitGmtsTrimCostExists(id))
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

        // POST: api/ConsUnitGmtsTrimCosts
        [HttpPost]
        public async Task<IActionResult> PostConsUnitGmtsTrimCost([FromBody] ConsUnitGmtsTrimCost consUnitGmtsTrimCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ConsUnitGmtsTrimCost.Add(consUnitGmtsTrimCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsUnitGmtsTrimCost", new { id = consUnitGmtsTrimCost.Id }, consUnitGmtsTrimCost);
        }

        //POST array of Object like : itemDetailsArray2
        // POST: api/AvgGreyConsFabricCosts/PrecostingId/FebricCostId
        [HttpPost("{TrimCostId}")]
        public async Task<IActionResult> PostConsUnitGmtsTrimCost2([FromRoute] int TrimCostId, [FromBody] ConsUnitGmtsTrimCost[] consUnitGmtsTrimCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            foreach (var item in consUnitGmtsTrimCost)
            {
                item.TrimCostId = TrimCostId;
                _context.ConsUnitGmtsTrimCost.Add(item);
            }

            await _context.SaveChangesAsync();

            return Ok(200);
        }


        // DELETE: api/ConsUnitGmtsTrimCosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsUnitGmtsTrimCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consUnitGmtsTrimCost = await _context.ConsUnitGmtsTrimCost.FindAsync(id);
            if (consUnitGmtsTrimCost == null)
            {
                return NotFound();
            }

            _context.ConsUnitGmtsTrimCost.Remove(consUnitGmtsTrimCost);
            await _context.SaveChangesAsync();

            return Ok(consUnitGmtsTrimCost);
        }

        // DELETE: api/ConsUnitGmtsTrimCosts/BytrimCostId/5
        [HttpDelete("BytrimCostId/{id}")]
        public IActionResult DeleteConsUnitGmtsByTrimCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ConsUnitGmtsTrimCost.RemoveRange(_context.ConsUnitGmtsTrimCost.Where(x => x.TrimCostId == id));

            //var consUnitGmtsTrimCost =  _context.ConsUnitGmtsTrimCost.Where(x => x.TrimCostId == id);
            //if (consUnitGmtsTrimCost == null)
            //{
            //    return NotFound();
            //}

            //foreach (var bytrimCostId in consUnitGmtsTrimCost)
            //{
            //    _context.ConsUnitGmtsTrimCost.Remove(bytrimCostId);
            //}

            //_context.ConsUnitGmtsTrimCost.Remove(consUnitGmtsTrimCost);
            _context.SaveChanges();

            return Ok(200);
        }

        private bool ConsUnitGmtsTrimCostExists(int id)
        {
            return _context.ConsUnitGmtsTrimCost.Any(e => e.Id == id);
        }
    }
}