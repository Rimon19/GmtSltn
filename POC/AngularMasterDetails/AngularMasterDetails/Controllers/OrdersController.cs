using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularMasterDetails.Model;

namespace AngularMasterDetails.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly CustomerContext _context;

        public OrdersController(CustomerContext context)
        {
            _context = context;
        }

        // GET: api/Orders
        [HttpGet]
        public System.Object GetOrder()
        {
            var result = (from a in _context.Order
                          join b in _context.Customer on a.CustomerId equals b.CustomerId

                          select new
                          {
                              a.OrderId,
                              a.OrderNo,
                              Customer = b.Name,
                              a.Pmethod,
                              a.Gtotal
                          });

            return result;
        }

        // GET: api/Orders/5
        [HttpGet("{id}")]
        public IActionResult GetOrder([FromRoute] long id)
        {
            var order = (from a in _context.Order
                         where a.OrderId == id

                         select new
                         {
                             a.OrderId,
                             a.OrderNo,
                             a.CustomerId,
                             a.Pmethod,
                             a.Gtotal,
                             DeletedOrderItemIDs = ""
                         }).FirstOrDefault();

            var orderDetails = (from a in _context.OrderItems
                                join b in _context.Item on a.ItemId equals b.ItemId
                                where a.OrderId == id

                                select new
                                {
                                    a.OrderId,
                                    a.OrderItemId,
                                    a.ItemId,
                                    ItemName = b.Name,
                                    b.Price,
                                    a.Quantity,
                                    Total = a.Quantity * b.Price
                                }).ToList();

            return Ok(new { order, orderDetails });
        }

        // PUT: api/Orders/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrder([FromRoute] int id, [FromBody] Order order)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(order).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrderExists(id))
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

        // POST: api/Orders
        [HttpPost]
        public async Task<IActionResult> PostOrder(Order order)
        {
            try
            {
                //Order table
                if (order.OrderId == 0)
                    _context.Order.Add(order);
                else
                    _context.Entry(order).State = EntityState.Modified;

                //OrderItems table
                foreach (var item in order.OrderItems)
                {
                    if (item.OrderItemId == 0)
                        _context.OrderItems.Add(item);
                    else
                        _context.Entry(item).State = EntityState.Modified;
                }

                //Delete for OrderItems
                foreach (var id in order.DeletedOrderItemIDs.Split(',').Where(x => x != ""))
                {
                    OrderItems x = _context.OrderItems.Find(Convert.ToInt32(id));
                    _context.OrderItems.Remove(x);
                }


                await _context.SaveChangesAsync();

            }

            catch(Exception ex)
            {
                Console.Write(ex.Message);
            }
            return Ok();
        }

        // DELETE: api/Orders/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder([FromRoute] long id)
        {
            Order order = _context.Order.Include(y => y.OrderItems)
                .SingleOrDefault(x => x.OrderId == id);

            foreach (var item in order.OrderItems.ToList())
            {
                _context.OrderItems.Remove(item);
            }

            _context.Order.Remove(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        private bool OrderExists(long id)
        {
            //return _context.Order.Any(e => e.OrderId == id);
            return _context.Order.Count(e => e.OrderId == id) > 0;
        }
    }
}