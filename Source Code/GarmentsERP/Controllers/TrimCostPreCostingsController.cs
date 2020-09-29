using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarmentsERP.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APICollection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrimCostPreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public TrimCostPreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/TrimCostPreCostings
        [HttpGet]
        public IEnumerable<TrimCostPreCosting> GetTrimCostPreCosting()
        {
            return _context.TrimCostPreCosting;
        }

        // GET: api/TrimCostPreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTrimCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trimCostPreCosting = await _context.TrimCostPreCosting.FindAsync(id);

            if (trimCostPreCosting == null)
            {
                return NotFound();
            }

            return Ok(trimCostPreCosting);
        }
        /*Get trimsCostByPreCostId*/
        // GET: api/TrimCostPreCostings/trimsCostByPreCostId
        [HttpGet("trimsCostByPreCostId/{id}")]
        public IActionResult GetTrimCostPreCostingByPreCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var TrimsCostByPreCostId = _context.TrimCostPreCosting.Where(x => x.PrecostingId == id);


            if (TrimsCostByPreCostId == null)
            {
                return NotFound();
            }


            return Ok(TrimsCostByPreCostId);

        }

        // PUT: api/TrimCostPreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrimCostPreCosting([FromRoute] int id, [FromBody] TrimCostPreCosting trimCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trimCostPreCosting.Id)
            {
                return BadRequest();
            }

            _context.Entry(trimCostPreCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrimCostPreCostingExists(id))
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

        // POST: api/TrimCostPreCostings
        [HttpPost]
        public async Task<IActionResult> PostTrimCostPreCosting([FromBody] TrimCostPreCosting trimCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TrimCostPreCosting.Add(trimCostPreCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrimCostPreCosting", new { id = trimCostPreCosting.Id }, trimCostPreCosting);
        }

        // DELETE: api/TrimCostPreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTrimCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var trimCostPreCosting = await _context.TrimCostPreCosting.FindAsync(id);
            if (trimCostPreCosting == null)
            {
                return NotFound();
            }

            _context.TrimCostPreCosting.Remove(trimCostPreCosting);
            await _context.SaveChangesAsync();

            return Ok(trimCostPreCosting);
        }

        private bool TrimCostPreCostingExists(int id)
        {
            return _context.TrimCostPreCosting.Any(e => e.Id == id);
        }
    }
}