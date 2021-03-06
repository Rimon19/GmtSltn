﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Web;

namespace CrystalReportTest.Reports
{
    public class CollectionHelper
    {
        /// <summary>
        /// LogFile instance
        /// </summary>
        //private static readonly ILog log = LogManager.GetLogger(typeof(CollectionHelper));

        /// <summary>
        /// Converts to DataTable;
        /// </summary>
        /// <typeparam name="T">Value type</typeparam>
        /// <param name="list">The list.</param>
        /// <returns>DataTable which contains data from List</returns>
        public static DataTable ConvertTo<T>(IList<T> list)
        {
            DataTable table = CreateTable<T>();
            Type entityType = typeof(T);
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(entityType);

            foreach (T item in list)
            {
                DataRow row = table.NewRow();

                foreach (PropertyDescriptor prop in properties)
                {
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                }

                table.Rows.Add(row);
            }

            return table;
        }

        /// <summary>
        /// Converts to Ilist.
        /// </summary>
        /// <typeparam name="T">Value type</typeparam>
        /// <param name="rows">The rows.</param>
        /// <returns>A List</returns>
        public static IList<T> ConvertTo<T>(IList<DataRow> rows)
        {
            IList<T> list = null;

            if (rows != null)
            {
                list = new List<T>();

                foreach (DataRow row in rows)
                {
                    T item = CreateItem<T>(row);
                    list.Add(item);
                }
            }

            return list;
        }

        /// <summary>
        /// Converts to Ilist.
        /// </summary>
        /// <typeparam name="T">Value type</typeparam>
        /// <param name="table">The table.</param>
        /// <returns>A list which contains data from DataTable</returns>
        public static IList<T> ConvertTo<T>(DataTable table)
        {
            if (table == null)
            {
                return null;
            }

            List<DataRow> rows = new List<DataRow>();

            foreach (DataRow row in table.Rows)
            {
                rows.Add(row);
            }

            return ConvertTo<T>(rows);
        }

        /// <summary>
        /// Creates the item.
        /// </summary>
        /// <typeparam name="T">Value type</typeparam>
        /// <param name="row">The row.</param>
        /// <returns>A item which containd data from DataRow</returns>
        public static T CreateItem<T>(DataRow row)
        {
            T obj = default(T);

            if (row != null)
            {
                obj = Activator.CreateInstance<T>();

                foreach (DataColumn column in row.Table.Columns)
                {
                    PropertyInfo prop = obj.GetType().GetProperty(column.ColumnName);
                    try
                    {
                        object value = row[column.ColumnName];
                        prop.SetValue(obj, value, null);
                    }
                    catch (Exception ex)
                    {
                        Console.Write(ex.Message);
                    }
                }
            }

            return obj;
        }

        /// <summary>
        /// Creates the table.
        /// </summary>
        /// <typeparam name="T">Value type</typeparam>
        /// <returns>DataTable with desired structure</returns>
        public static DataTable CreateTable<T>()
        {
            Type entityType = typeof(T);
            DataTable table = new DataTable(entityType.Name);
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(entityType);

            foreach (PropertyDescriptor prop in properties)
            {
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            }

            return table;
        }
    }
}