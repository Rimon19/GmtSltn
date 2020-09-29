using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularDynamicMenu.Models;

namespace AngularDynamicMenu.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TUsersController : ControllerBase
    {
        private readonly GarmentERPContext _context;

        public TUsersController(GarmentERPContext context)
        {
            _context = context;
        }

        // GET: api/TUsers
        [HttpGet]
        public IEnumerable<TUser> GetTUser()
        {
            return _context.TUser;
        }

        // GET: api/TUsers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //var tUser = await _context.TUser.FindAsync(id);

            var tUser = from ar in _context.TAccessRight
                      join r2ar in _context.TRole2accessRight on ar.AccessRightId equals r2ar.AccessRightId
                        join u2r in _context.TUser2role on r2ar.RoleId equals u2r.RoleId
                        join u in _context.TUser on u2r.UserId equals u.UserId into u_r_ar
                        from t in u_r_ar.DefaultIfEmpty()
                        where t.UserId == id
                        select new UsersViewModel() { UserName ="", Routepath = ar.routepath , Description = ar.Description };


            if (tUser == null)
            {
                return NotFound();
            }
            return Ok(tUser.ToList());
            //return Ok(tUser);
        }

        // PUT: api/TUsers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTUser([FromRoute] int id, [FromBody] TUser tUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tUser.UserId)
            {
                return BadRequest();
            }

            _context.Entry(tUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TUserExists(id))
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

        // POST: api/TUsers
        [HttpPost]
        public async Task<IActionResult> PostTUser([FromBody] TUser tUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.TUser.Add(tUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTUser", new { id = tUser.UserId }, tUser);
        }

        // DELETE: api/TUsers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tUser = await _context.TUser.FindAsync(id);
            if (tUser == null)
            {
                return NotFound();
            }

            _context.TUser.Remove(tUser);
            await _context.SaveChangesAsync();

            return Ok(tUser);
        }

        private bool TUserExists(int id)
        {
            return _context.TUser.Any(e => e.UserId == id);
        }
    }
}