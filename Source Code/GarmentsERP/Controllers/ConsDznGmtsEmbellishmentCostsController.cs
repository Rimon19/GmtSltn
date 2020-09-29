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
    public class ConsDznGmtsEmbellishmentCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ConsDznGmtsEmbellishmentCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ConsDznGmtsEmbellishmentCosts
        [HttpGet]
        public IEnumerable<ConsDznGmtsEmbellishmentCost> GetConsDznGmtsEmbellishmentCost()
        {
            return _context.ConsDznGmtsEmbellishmentCost;
        }

        // GET: api/ConsDznGmtsEmbellishmentCosts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConsDznGmtsEmbellishmentCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consDznGmtsEmbellishmentCost = await _context.ConsDznGmtsEmbellishmentCost.FindAsync(id);

            if (consDznGmtsEmbellishmentCost == null)
            {
                return NotFound();
            }

            return Ok(consDznGmtsEmbellishmentCost);
        }
        /*get cons dzn gmts filter by  by embellishment cost id */
        // GET: api/ConsDznGmtsEmbellishmentCosts/EmbellishmentCostId/5
        [HttpGet("EmbellishmentCostId/{id}")]
        public IActionResult GetConsDznGmtsByEmbellishmentCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consDznGmtsEmbellishmentCost = _context.ConsDznGmtsEmbellishmentCost.Where(x => x.EmbellishmentCostId == id);

            if (consDznGmtsEmbellishmentCost == null)
            {
                return NotFound();
            }

            return Ok(consDznGmtsEmbellishmentCost);
        }



        // PUT: api/ConsDznGmtsEmbellishmentCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsDznGmtsEmbellishmentCost([FromRoute] int id, [FromBody] ConsDznGmtsEmbellishmentCost consDznGmtsEmbellishmentCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != consDznGmtsEmbellishmentCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(consDznGmtsEmbellishmentCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsDznGmtsEmbellishmentCostExists(id))
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

        // POST: api/ConsDznGmtsEmbellishmentCosts
        [HttpPost]
        public async Task<IActionResult> PostConsDznGmtsEmbellishmentCost([FromBody] ConsDznGmtsEmbellishmentCost consDznGmtsEmbellishmentCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ConsDznGmtsEmbellishmentCost.Add(consDznGmtsEmbellishmentCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsDznGmtsEmbellishmentCost", new { id = consDznGmtsEmbellishmentCost.Id }, consDznGmtsEmbellishmentCost);
        }



        //POST array of Object like : consDznGmtsArray
        // POST: api/ConsDznGmtsEmbellishmentCosts/EmbellishmentCostId
        [HttpPost("{EmbellishmentCostId}")]
        public async Task<IActionResult> PostConsDznGmtsEmbellishmentCost2([FromRoute] int EmbellishmentCostId, [FromBody] ConsDznGmtsEmbellishmentCost[] consDznGmtsEmbellishmentCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach (var item in consDznGmtsEmbellishmentCost)
            {
                item.EmbellishmentCostId = EmbellishmentCostId;
                _context.ConsDznGmtsEmbellishmentCost.Add(item);
            }

            //_context.ConsDznGmtsEmbellishmentCost.Add(consDznGmtsEmbellishmentCost);
            await _context.SaveChangesAsync();

            return Ok(200);
        }


        // DELETE: api/ConsDznGmtsEmbellishmentCosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsDznGmtsEmbellishmentCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consDznGmtsEmbellishmentCost = await _context.ConsDznGmtsEmbellishmentCost.FindAsync(id);
            if (consDznGmtsEmbellishmentCost == null)
            {
                return NotFound();
            }

            _context.ConsDznGmtsEmbellishmentCost.Remove(consDznGmtsEmbellishmentCost);
            await _context.SaveChangesAsync();

            return Ok(consDznGmtsEmbellishmentCost);
        }

        // multiple delete by EmbellishmentCostId
        // DELETE: api/ConsDznGmtsEmbellishmentCosts/EmbellishmentCostId/5
        [HttpDelete("EmbellishmentCostId/{id}")]
        public IActionResult DeleteConsDznGmtsByEmbellishmentCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            

            _context.ConsDznGmtsEmbellishmentCost.RemoveRange(_context.ConsDznGmtsEmbellishmentCost.Where(x => x.EmbellishmentCostId == id));

            //if (consDznGmtsEmbellishmentCost == null)
            //{
            //    return NotFound();
            //}

            //foreach (var EmbellishmentCostId in consDznGmtsEmbellishmentCost)
            //{
            //    _context.ConsDznGmtsEmbellishmentCost.Remove(EmbellishmentCostId);
            //}

            //_context.ConsDznGmtsEmbellishmentCost.Remove(consDznGmtsEmbellishmentCost);
            _context.SaveChanges();

            return Ok(200);
        }

        private bool ConsDznGmtsEmbellishmentCostExists(int id)
        {
            return _context.ConsDznGmtsEmbellishmentCost.Any(e => e.Id == id);
        }
    }
}