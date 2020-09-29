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
    public class SizePannelPodetailsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public SizePannelPodetailsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/SizePannelPodetails/Index

        [HttpGet("Index")]
        public IEnumerable<SizePannelPodetails> GetSizePannelPodetails()
        {
            return _context.SizePannelPodetails;
        }

        // GET: api/SizePannelPodetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSizePannelPodetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sizePannelPodetails = await _context.SizePannelPodetails.FindAsync(id);

            if (sizePannelPodetails == null)
            {
                return NotFound();
            }

            return Ok(sizePannelPodetails);
        }

        // PUT: api/SizePannelPodetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSizePannelPodetails([FromRoute] int id, [FromBody] SizePannelPodetails sizePannelPodetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sizePannelPodetails.SizePannelId)
            {
                return BadRequest();
            }

            _context.Entry(sizePannelPodetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SizePannelPodetailsExists(id))
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

        // POST: api/SizePannelPodetails
        [HttpPost]
        public async Task<IActionResult> PostSizePannelPodetails([FromBody] SizePannelPodetails sizePannelPodetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SizePannelPodetails.Add(sizePannelPodetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSizePannelPodetails", new { id = sizePannelPodetails.SizePannelId }, sizePannelPodetails);
        }

        // DELETE: api/SizePannelPodetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSizePannelPodetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sizePannelPodetails = await _context.SizePannelPodetails.FindAsync(id);
            if (sizePannelPodetails == null)
            {
                return NotFound();
            }

            _context.SizePannelPodetails.Remove(sizePannelPodetails);
            await _context.SaveChangesAsync();

            return Ok(sizePannelPodetails);
        }

        private bool SizePannelPodetailsExists(int id)
        {
            return _context.SizePannelPodetails.Any(e => e.SizePannelId == id);
        }
    }
}