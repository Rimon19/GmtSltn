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
    public class TeamlederInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public TeamlederInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/TeamlederInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblTeamlederInfoes> GetTblTeamlederInfoes()
        {
            return _context.TblTeamlederInfoes;
        }

        // GET: api/TeamlederInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblTeamlederInfoes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblTeamlederInfoes = await _context.TblTeamlederInfoes.FindAsync(id);

            if (tblTeamlederInfoes == null)
            {
                return NotFound();
            }

            return Ok(tblTeamlederInfoes);
        }

        // PUT: api/TeamlederInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblTeamlederInfoes([FromRoute] int id, [FromBody] TblTeamlederInfoes tblTeamlederInfoes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblTeamlederInfoes.TeamleaderId)
            {
                return BadRequest();
            }

            _context.Entry(tblTeamlederInfoes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblTeamlederInfoesExists(id))
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

        // POST: api/TeamlederInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblTeamlederInfoes([FromBody] TblTeamlederInfoes tblTeamlederInfoes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TblTeamlederInfoes.Add(tblTeamlederInfoes);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblTeamlederInfoesExists(tblTeamlederInfoes.TeamleaderId))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblTeamlederInfoes", new { id = tblTeamlederInfoes.TeamleaderId }, tblTeamlederInfoes);
        }

        // DELETE: api/TeamlederInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblTeamlederInfoes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblTeamlederInfoes = await _context.TblTeamlederInfoes.FindAsync(id);
            if (tblTeamlederInfoes == null)
            {
                return NotFound();
            }

            _context.TblTeamlederInfoes.Remove(tblTeamlederInfoes);
            await _context.SaveChangesAsync();

            return Ok(tblTeamlederInfoes);
        }

        private bool TblTeamlederInfoesExists(int id)
        {
            return _context.TblTeamlederInfoes.Any(e => e.TeamleaderId == id);
        }
    }
}