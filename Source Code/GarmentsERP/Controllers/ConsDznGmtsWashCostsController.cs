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
    public class ConsDznGmtsWashCostsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public ConsDznGmtsWashCostsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/ConsDznGmtsWashCosts
        [HttpGet]
        public IEnumerable<ConsDznGmtsWashCost> GetConsDznGmtsWashCost()
        {
            return _context.ConsDznGmtsWashCost;
        }

        // GET: api/ConsDznGmtsWashCosts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConsDznGmtsWashCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consDznGmtsWashCost = await _context.ConsDznGmtsWashCost.FindAsync(id);

            if (consDznGmtsWashCost == null)
            {
                return NotFound();
            }

            return Ok(consDznGmtsWashCost);
        }


        /*get ConsDznGmtsWashCosts filter by  by WashCostId */
        // GET: api/ConsDznGmtsWashCosts/WashCostId/5
        [HttpGet("WashCostId/{id}")]
        public IActionResult GetConsDznGmtsByWashCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consDznGmtsWashCost =  _context.ConsDznGmtsWashCost.Where(x => x.WashCostId == id);

            if (consDznGmtsWashCost == null)
            {
                return NotFound();
            }

            return Ok(consDznGmtsWashCost);
        }

        // PUT: api/ConsDznGmtsWashCosts/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutConsDznGmtsWashCost([FromRoute] int id, [FromBody] ConsDznGmtsWashCost consDznGmtsWashCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != consDznGmtsWashCost.Id)
            {
                return BadRequest();
            }

            _context.Entry(consDznGmtsWashCost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsDznGmtsWashCostExists(id))
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

        // POST: api/ConsDznGmtsWashCosts
        [HttpPost]
        public async Task<IActionResult> PostConsDznGmtsWashCost([FromBody] ConsDznGmtsWashCost consDznGmtsWashCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.ConsDznGmtsWashCost.Add(consDznGmtsWashCost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsDznGmtsWashCost", new { id = consDznGmtsWashCost.Id }, consDznGmtsWashCost);
        }


        //POST array of Object like : ConsDznGmtsWashCostsArray
        // POST: api/ConsDznGmtsWashCosts/WashCostId
        [HttpPost("{WashCostId}")]
        public async Task<IActionResult> PostConsDznGmtsWashCost2([FromRoute] int WashCostId, [FromBody] ConsDznGmtsWashCost[] consDznGmtsWashCost)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            foreach (var item in consDznGmtsWashCost)
            {
                item.WashCostId = WashCostId;
                _context.ConsDznGmtsWashCost.Add(item);
            }

            //_context.ConsDznGmtsWashCost.Add(consDznGmtsWashCost);
            await _context.SaveChangesAsync();

            return Ok(200);
        }



        // DELETE: api/ConsDznGmtsWashCosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteConsDznGmtsWashCost([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var consDznGmtsWashCost = await _context.ConsDznGmtsWashCost.FindAsync(id);
            if (consDznGmtsWashCost == null)
            {
                return NotFound();
            }

            _context.ConsDznGmtsWashCost.Remove(consDznGmtsWashCost);
            await _context.SaveChangesAsync();

            return Ok(consDznGmtsWashCost);
        }


        // delete multiple row filte by washCostId
        // DELETE: api/ConsDznGmtsWashCosts/ByWashCostId/5
        [HttpDelete("ByWashCostId/{id}")]
        public IActionResult DeleteConsDznGmtsByWashCostId([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _context.ConsDznGmtsWashCost.RemoveRange(_context.ConsDznGmtsWashCost.Where(x => x.WashCostId == id));
            _context.SaveChanges();

            //var consDznGmtsWashCost = _context.ConsDznGmtsWashCost.Where(x => x.WashCostId== id);
            //if (consDznGmtsWashCost == null)
            //{
            //    return NotFound();
            //}

            //foreach (var item in consDznGmtsWashCost)
            //{
            //    _context.ConsDznGmtsWashCost.Remove(item);
            //}

            //_context.ConsDznGmtsWashCost.Remove(consDznGmtsWashCost);
            return Ok(200);
        }


        private bool ConsDznGmtsWashCostExists(int id)
        {
            return _context.ConsDznGmtsWashCost.Any(e => e.Id == id);
        }
    }
}