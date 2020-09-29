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
    public class EmbellishmentCostPreCostingsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public EmbellishmentCostPreCostingsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/EmbellishmentCostPreCostings
        [HttpGet]
        public IEnumerable<EmbellishmentCostPreCosting> GetEmbellishmentCostPreCosting()
        {
            return _context.EmbellishmentCostPreCosting;
        }

        /*Get embellishmentCostByPreCostId*/
        // GET: api/EmbellishmentCostPreCostings/embellishmentCostByPreCostId
        [HttpGet("embellishmentCostByPreCostId/{id}")]
        public IActionResult GetEmbellishmentCostPreCostingByPreCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var embellishmentCostByPreCostId = _context.EmbellishmentCostPreCosting.Where(x => x.PrecostingId == id);


            if (embellishmentCostByPreCostId == null)
            {
                return NotFound();
            }


            return Ok(embellishmentCostByPreCostId);

        }

        // GET: api/EmbellishmentCostPreCostings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmbellishmentCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var embellishmentCostPreCosting = await _context.EmbellishmentCostPreCosting.FindAsync(id);

            if (embellishmentCostPreCosting == null)
            {
                return NotFound();
            }

            return Ok(embellishmentCostPreCosting);
        }

        // PUT: api/EmbellishmentCostPreCostings/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmbellishmentCostPreCosting([FromRoute] int id, [FromBody] EmbellishmentCostPreCosting embellishmentCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != embellishmentCostPreCosting.Id)
            {
                return BadRequest();
            }

            _context.Entry(embellishmentCostPreCosting).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmbellishmentCostPreCostingExists(id))
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

        // POST: api/EmbellishmentCostPreCostings
        [HttpPost]
        public async Task<IActionResult> PostEmbellishmentCostPreCosting([FromBody] EmbellishmentCostPreCosting embellishmentCostPreCosting)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.EmbellishmentCostPreCosting.Add(embellishmentCostPreCosting);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmbellishmentCostPreCosting", new { id = embellishmentCostPreCosting.Id }, embellishmentCostPreCosting);
        }

        // DELETE: api/EmbellishmentCostPreCostings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmbellishmentCostPreCosting([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var embellishmentCostPreCosting = await _context.EmbellishmentCostPreCosting.FindAsync(id);
            if (embellishmentCostPreCosting == null)
            {
                return NotFound();
            }

            _context.EmbellishmentCostPreCosting.Remove(embellishmentCostPreCosting);
            await _context.SaveChangesAsync();

            return Ok(embellishmentCostPreCosting);
        }

        private bool EmbellishmentCostPreCostingExists(int id)
        {
            return _context.EmbellishmentCostPreCosting.Any(e => e.Id == id);
        }
    }
}
