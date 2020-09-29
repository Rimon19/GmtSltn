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
    public class InputPannelPodetailsController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public InputPannelPodetailsController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/InputPannelPodetails/Index

        [HttpGet("Index")]
        public IEnumerable<InputPannelPodetails> GetInputPannelPodetails()
        {
            return _context.InputPannelPodetails;
        }

        // GET: api/InputPannelPodetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInputPannelPodetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inputPannelPodetails = await _context.InputPannelPodetails.FindAsync(id);

            if (inputPannelPodetails == null)
            {
                return NotFound();
            }

            return Ok(inputPannelPodetails);
        }


        [HttpGet("Details/{id}")]
        public IActionResult GetSizewizePoDetails([FromRoute] int id)

        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var sizewiseorderdetails = _context.SizePannelPodetails.Where(x => x.InputPannelId == id);


            if (sizewiseorderdetails == null)
            {
                return NotFound();
            }


            return Ok(sizewiseorderdetails);

        }

        // PUT: api/InputPannelPodetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInputPannelPodetails([FromRoute] int id, [FromBody] InputPannelPodetails inputPannelPodetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != inputPannelPodetails.InputPannelId)
            {
                return BadRequest();
            }

            _context.Entry(inputPannelPodetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InputPannelPodetailsExists(id))
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

        // POST: api/InputPannelPodetails
        [HttpPost]
        public async Task<IActionResult> PostInputPannelPodetails([FromBody] InputPannelPodetails inputPannelPodetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            _context.InputPannelPodetails.Add(inputPannelPodetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInputPannelPodetails", new { id = inputPannelPodetails.InputPannelId }, inputPannelPodetails);
        }

        // DELETE: api/InputPannelPodetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInputPannelPodetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var inputPannelPodetails = await _context.InputPannelPodetails.FindAsync(id);
            if (inputPannelPodetails == null)
            {
                return NotFound();
            }

            _context.InputPannelPodetails.Remove(inputPannelPodetails);
            await _context.SaveChangesAsync();

            return Ok(inputPannelPodetails);
        }

        private bool InputPannelPodetailsExists(int id)
        {
            return _context.InputPannelPodetails.Any(e => e.InputPannelId == id);
        }
    }
}