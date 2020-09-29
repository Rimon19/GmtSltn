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
    public class employeesController : ControllerBase
    {
        private readonly dbTestContext _context;

        public employeesController(dbTestContext context)
        {
            _context = context;
        }

        // GET: api/employees/Index
        //[HttpGet]
        [HttpGet("Index")]

        public IEnumerable<Tblemployee> Index()
        {
            return _context.Tblemployee;
        }

        // GET: api/employees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblemployee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblemployee = await _context.Tblemployee.FindAsync(id);

            if (tblemployee == null)
            {
                return NotFound();
            }

            return Ok(tblemployee);
        }

        // PUT: api/employees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblemployee([FromRoute] int id, [FromBody] Tblemployee tblemployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblemployee.Employeeid)
            {
                return BadRequest();
            }

            _context.Entry(tblemployee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblemployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
             return CreatedAtAction("GetTblemployee", new { id = tblemployee.Employeeid }, tblemployee);
        }

        // POST: api/employees
        [HttpPost]
        public async Task<IActionResult> PostTblemployee([FromBody] Tblemployee tblemployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Tblemployee.Add(tblemployee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblemployee", new { id = tblemployee.Employeeid }, tblemployee);
        }

        // DELETE: api/employees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblemployee([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblemployee = await _context.Tblemployee.FindAsync(id);
            if (tblemployee == null)
            {
                return NotFound();
            }

            _context.Tblemployee.Remove(tblemployee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblemployee", new { id = tblemployee.Employeeid }, tblemployee);
        }

        private bool TblemployeeExists(int id)
        {
            return _context.Tblemployee.Any(e => e.Employeeid == id);
        }
    }
}