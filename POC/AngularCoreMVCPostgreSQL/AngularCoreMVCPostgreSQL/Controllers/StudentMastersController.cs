﻿using System;
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
    public class StudentMastersController : ControllerBase
    {
        private readonly dbTestContext _context;

        public StudentMastersController(dbTestContext context)
        {
            _context = context;
        }

        // GET: api/StudentMasters
        [HttpGet]
        public IEnumerable<StudentMasters> GetStudentMasters()
        {
            return _context.StudentMasters;
        }

        // GET: api/StudentMasters/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudentMasters([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentMasters = await _context.StudentMasters.FindAsync(id);

            if (studentMasters == null)
            {
                return NotFound();
            }

            return Ok(studentMasters);
        }

        // GET: api/StudentMasters/5
        [HttpGet("Details/{id}")]
        public IActionResult GetStudentMasterDetails([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentDetails = _context.Studentdetails.Where(i => i.Stdid == id);

            if (studentDetails == null)
            {
                return NotFound();
            }

            return Ok(studentDetails);
        }


        // PUT: api/StudentMasters/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentMasters([FromRoute] int id, [FromBody] StudentMasters studentMasters)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != studentMasters.StdId)
            {
                return BadRequest();
            }

            _context.Entry(studentMasters).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentMastersExists(id))
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

        // POST: api/StudentMasters
        [HttpPost]
        public async Task<IActionResult> PostStudentMasters([FromBody] StudentMasters studentMasters)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.StudentMasters.Add(studentMasters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentMasters", new { id = studentMasters.StdId }, studentMasters);
        }

        // DELETE: api/StudentMasters/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentMasters([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var studentMasters = await _context.StudentMasters.FindAsync(id);
            if (studentMasters == null)
            {
                return NotFound();
            }

            _context.StudentMasters.Remove(studentMasters);
            await _context.SaveChangesAsync();

            return Ok(studentMasters);
        }

        private bool StudentMastersExists(int id)
        {
            return _context.StudentMasters.Any(e => e.StdId == id);
        }
    }
}