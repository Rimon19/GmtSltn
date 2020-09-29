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
    public class UserInfoesController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public UserInfoesController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/UserInfoes/Index
        [HttpGet("Index")]
        public IEnumerable<TblUserInfo> GetTblUserInfo()
        {
            return _context.tblUserInfo;
        }

        // GET: api/UserInfoes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTblUserInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblUserInfo = await _context.tblUserInfo.FindAsync(id);

            if (tblUserInfo == null)
            {
                return NotFound();
            }

            return Ok(tblUserInfo);
        }

        // PUT: api/UserInfoes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTblUserInfo([FromRoute] int id, [FromBody] TblUserInfo tblUserInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tblUserInfo.UserID)
            {
                return BadRequest();
            }

            _context.Entry(tblUserInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblUserInfoExists(id))
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

        // POST: api/UserInfoes
        [HttpPost]
        public async Task<IActionResult> PostTblUserInfo([FromBody] TblUserInfo tblUserInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.tblUserInfo.Add(tblUserInfo);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (TblUserInfoExists(tblUserInfo.UserID))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetTblUserInfo", new { id = tblUserInfo.UserID }, tblUserInfo);
        }

       

    // DELETE: api/UserInfoes/5
    [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblUserInfo([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblUserInfo = await _context.tblUserInfo.FindAsync(id);
            if (tblUserInfo == null)
            {
                return NotFound();
            }

            _context.tblUserInfo.Remove(tblUserInfo);
            await _context.SaveChangesAsync();

            return Ok(tblUserInfo);
        }

        private bool TblUserInfoExists(int id)
        {
            return _context.tblUserInfo.Any(e => e.UserID == id);
        }
    }
}