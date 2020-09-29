using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularCoreMVCPostgreSQL.Models;

namespace AngularCoreMVCPostgreSQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentdetailsController : ControllerBase
    {
        private readonly dbTestContext _context;

        public StudentdetailsController(dbTestContext context)
        {
            _context = context;
        }

        // GET: api/Studentdetails
        [HttpGet]
        public IEnumerable<Studentdetails> GetStudentdetails()
        {
            return _context.Studentdetails;
        }

        // GET: api/Studentdetails/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentdetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentdetails = await _context.Studentdetails.FindAsync(id);

            if (studentdetails == null)
            {
                return NotFound();
            }

            return Ok(studentdetails);
        }

        // PUT: api/Studentdetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentdetails([FromRoute] int id, [FromBody] Studentdetails studentdetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentdetails.Stddtlid)
            {
                return BadRequest();
            }

            _context.Entry(studentdetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentdetailsExists(id))
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

        // POST: api/Studentdetails
        [HttpPost]
        public async Task<IActionResult> PostStudentdetails([FromBody] Studentdetails studentdetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Studentdetails.Add(studentdetails);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentdetails", new { id = studentdetails.Stddtlid }, studentdetails);
        }

        // DELETE: api/Studentdetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentdetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentdetails = await _context.Studentdetails.FindAsync(id);
            if (studentdetails == null)
            {
                return NotFound();
            }

            _context.Studentdetails.Remove(studentdetails);
            await _context.SaveChangesAsync();

            return Ok(studentdetails);
        }

        private bool StudentdetailsExists(int id)
        {
            return _context.Studentdetails.Any(e => e.Stddtlid == id);
        }
    }
}