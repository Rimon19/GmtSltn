import { NbMenuItem } from '@nebular/theme';
import { title } from 'process';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline', 
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Merchandising',
    icon: 'layout-outline',
    children: [
      {
        title: 'Order Tracking',
       // link: '/pages/marchandizer',
        children: [
          { title: 'Sales Forecasting Entry',
           link: '/pages/SalesForecastEntry',
          },
          { title: 'Offering Cost',
           link: '/pages/offering-cost',
          },
          { title: 'Quotation Inquery',
           link: '/pages/quotation-inquery',
          },
          {
            title: 'Sample Entry',
            link: '/pages/SampleDevelopmentOrderDetails', 
          },
          
          {
            title: 'Price Quotation',
            link: '/pages/price-quotation',
          },
          
          {
            title: 'Order Entry',
            link: '/pages/marchandizer',
          },
          {
            title: 'Sample Requisition With Booking',
            link: '/pages/sample-requisition-withBooking',
          },
          
          {
            title: 'Pre-costing V2',
            link: '/pages/show-precosting',
          }
        ],
       

      },
      {
        title: 'Fabric Booking',
       // link: '/pages/marchandizer',
        children: [
          { title: 'Sample Fabric Booking Without Order',
           link: '/pages/sample-fabric-booking-without-order',
          },
          {
            title: 'Sample Fabric Booking With Order',
            link: '/pages/sample-fabric-booking-withorder', 
          },          
          {
            title: 'Short Fabric Booking',
            link: '/pages/short-fabric-booking',
          },
          {
            title: 'Main Fabric Booking V2',
            link: '/pages/main-fabric-bookingV2',
          },
         
          {
            title: 'Partial Fabric Booking',
            link:  '/pages/partial-fabric-booking',
          }
        ],
       

      },
      {
        title: 'Trims Booking',
        children: [
          { title: 'Short Trims Booking [Multiple Order]',
           link: '/pages/short-trims-booking',
          },
          {
            title: 'Multiple Job Wise Trims Booking V2',
            link: '/pages/multiple-jobWise-trimsBookingV2',
          },      
          {
            title: 'Multiple Job Wise Short Trims Booking V2 ',
            link:  '/pages/multiple-jobWise-short-BookingV2',
          }
        ],
       

      },
      {
        title: 'Service Booking',
       // link: '/pages/marchandizer',
        children: [
          { title: 'Fabric Service Booking',
           link: '/pages/FabricServiceBooking',
          },
          {
            title: 'Service Booking For Knitting',
            link: '/pages/ServiceBookingForKnitting',
          },
          
          {
            title: 'Yarn Dyening Work Order',
            link: '/pages/show-Yarn-Dyeing-Work-Order',
          },
          
          {
            title: 'Yarn Dyening Work Order Without Order',
            link:  '/pages/YarnDyeingWOWithoutOrderMaster',
          }
          ,
          
          {
            title: 'Service Booking For AOP V2',
            link:  '/pages/service-booking-for-aopv2',
          }
          ,
          
          {
            title: 'Multiple Job Wise Embelisment Work Order',
            link:  '/pages/Multiple-Job-Wise-Embelisment-Work-Order',
          }
          ,
          
          {
            title: 'Service Booking For AOP Without Order',
            link:  '/pages/service-booking-forAOP-withoutOrder',
          }
          ,
          
          {
            title: 'Yarn Service Work Order',
            link:  '/pages/demo',
          }
          ,
          
          {
            title: 'Embelisment Work Order V2',
            link:  '/pages/demo',
          }
          ,
          
          {
            title:'Service Booking For Knitting and\nDyening[Without Order]',
            link:  '/pages/service-bookingFor-knitingAnd-dyeing',
          }
          ,
          
          {
            title: 'Service Booking For Dyeing',
            link:  '/pages/service-booking-for-dyeing',
          }
          ,
          
          {
            title: 'Multi Job Wise Service Booking  Knitting',
            link:  '/pages/demo',
          },
          
          {
            title: 'Multi Job Wise Service Booking  Dyeing',
            link:  '/pages/MultiJobWiseServiceBookingKnitting',
          }
        ],
       

      },

      {
        title: 'Approval Tracking',
       // link: '/pages/marchandizer',
        children: [
          { title: 'Lab Dip Approval',
           link: '/pages/demo',
          },
          {
            title: 'Sample Approval',
            link: '/pages/demo',
          },
          
          {
            title: 'Embellisment Approval',
            link: '/pages/demo',
          },
          
          {
            title: 'Trims Approval',
            link:  '/pages/demo',
          }
        ],
       

      },
      {
        title: 'Report',
       // link: '/pages/marchandizer',
        children: [
          { title: 'Color and Size Breakdown Report',
           link: '/pages/demo',
          },
          {
            title: 'Accessories Followup Report',
            link: '/pages/demo',
          },
          {
            title: 'Test Report',
            link: '/pages/test-report',
          },
          
          
          {
            title: 'Sample Development Status Report',
            link: '/pages/demo',
          },
          
          {
            title: 'Order Wise Sample Approval',
            link:  '/pages/demo',
          }
          ,
          
          {
            title: 'Labdip Approval Report',
            link:  '/pages/demo',
          }
          ,
          
          {
            title: 'Embellisment Approval Report',
            link:  '/pages/demo',
          }
        ],
       

      },
	  //  {
    //     title: 'Precosting',
    //     link: '/pages/show-precosting',
    //   },
	  //  {
    //     title: 'Parsial fabric Booking',
    //     link: '/pages/show-partial-fabric-booking',
    //   },
	  //  {
    //     title: 'Company Info',
    //     link: '/pages/show-company',
    //   },
	  //  {
    //     title: 'Location Info',
    //     link: '/pages/show-location',
    //   },
	  //  {
    //     title: 'Buyer Info',
    //     link: '/pages/show-buyer',
    //   },
	  //  {
    //     title: 'Country Info',
    //     link: '/pages/show-country',
    //   },
	  //  {
    //     title: 'Marchandizer Info',
    //     link: '/pages/show-marchandizer-info',
    //   },
	  //  {
    //     title: 'Teamleader Info',
    //     link: '/pages/show-teamleader-info',
    //   },
	  //  {
    //     title: 'Image Upload',
    //     link: '/pages/show-image',
    //   },
 
    ],
  },
  {
    title: 'TNA',
    icon: 'layout-outline',
    children:[
      {
        title: 'TNA Template Entry',
         link: '/pages/tna/tna-template-entry', 
      },
      {
        title: 'TNA Update Entry',
         link: '/pages/demo', 
      },
      {
        title: 'TNA Manual Permission',
         link: '/pages/demo', 
      },
      {
        title: 'Knit',
         children:[
          { title: 'TNA Process',
          link: '/pages/demo',
         },
         { title: 'TNA Progress Report',
          link: '/pages/demo',
         },
         { title: 'Task Wise TNA Report',
          link: '/pages/demo',
         },
         { title: 'Fabric TNA Progress Report',
          link: '/pages/demo',
         },
         { title: 'TNA Progress Vs Actual Finish',
          link: '/pages/demo',
         },
         { title: 'TNA Plan In Quantity',
          link: '/pages/demo',
         },
         ] 
      },
    ]
  },
  {
    title: 'Planning',
    icon: 'layout-outline',
    children:[
      // {
      //   title: 'TNA Template Entry',
      //    link: '/pages/demo', 
      // },
      // {
      //   title: 'TNA Update Entry',
      //    link: '/pages/demo', 
      // },
      // {
      //   title: 'TNA Manual Permission',
      //    link: '/pages/demo', 
      // },
      {
        title: 'Cutting Plan',
         children:[
          { title: 'cut and lay entry',
          link: '/pages/planning/cut-and-lay-entry',
         },
         { title: 'Cut and Lay Entry Roll Wise',
          link: '/pages/planning/cut-and-lay-entry-roll-wise',
         },
         { title: 'Cut and Lay Entry Ratio Wise',
          link: '/pages/planning/cut-and-lay-entry-ratio-wise',
         },
         { title: 'Cut and Lay Entry Ratio Wise 2',
          link: '/pages/planning/cut-and-lay-entry-ratio-wise2',
         },
         { title: 'Cut and Lay Entry Ratio Wise Urmi',
          link: '/pages/planning/cut-and-lay-entry-ratio-wise-urmi',
         }
         ] 
      },
      {
        title: 'Work Study',
         children:[
          { title: 'Sewing Operation',
          link: '/pages/planning/sewing-operation-For-Work-Study',
         },
         { title: 'Operation Bulletin',
          link: '/pages/demo',
         },
         { title: 'Efficiency Percentage Slab',
          link: '/pages/planning/efficiency-percentage-slab',
         }
         ] 
      },
      {
        title: 'Report',
         children:[
          { title: 'Sewing Plan Vs Production',
          link: '/pages/demo',
         },
         { title: 'Style Wise Sewing Plan Vs Production',
          link: '/pages/demo',
         },
         { title: 'Job/Order Wise Cutting Lay and Production Report',
          link: '/pages/demo',
         },
         { title: 'Cutting Status Report',
          link: '/pages/demo',
         },
         { title: 'Bundle Status Report',
          link: '/pages/demo',
         },
         { title: 'Cutting Status Report 2',
          link: '/pages/demo',
         },
         ] 
      },
    ]
  },
  {
    title: 'Commercial',
    icon: 'keypad-outline',
    children:[
      // {
      //   title: 'TNA Template Entry',
      //    link: '/pages/demo', 
      // },
      // {
      //   title: 'TNA Update Entry',
      //    link: '/pages/demo', 
      // },
      // {
      //   title: 'TNA Manual Permission',
      //    link: '/pages/demo', 
      // },
      {
        title: 'Purchase Order',
         children:[
          { title: 'Yarn Purchase Requisition',
          link: '/pages/commercial/YarnPurchaseRequisition',
         },
         { title: 'Yarn Purchase Order',
          link: '/pages/demo',
         },
         { title: 'Balk Yarn Allocation',
          link: '/pages/demo',
         },
         { title: 'Stationary Purchase Order',
          link: '/pages/demo',
         },
         { title: 'Others Purchase Order',
          link: '/pages/demo',
         }
         ] 
      },
      {
        title: 'Export',
         children:[
          { title: 'Sales Contract Entry',
          link: '/pages/demo',
         },
         { title: 'Sales Contract Amendment',
          link: '/pages/demo',
         },
         { title: 'Export LC Entry',
          link: '/pages/demo',
         },
         { title: 'Export LC Amendment',
          link: '/pages/demo',
         },
         { title: 'Pre-Export Finance',
          link: '/pages/demo',
         },
         { title: 'Export Invoice',
          link: '/pages/demo',
         },
         { title: 'Non LC Export',
          link: '/pages/demo',
         },
         { title: 'Doc. Submission to Buyer',
          link: '/pages/demo',
         },
         { title: 'Doc. Submission to Bank',
          link: '/pages/demo',
         },
         { title: 'Export Proceeds Realization',
          link: '/pages/demo',
         },
         { title: 'Export Pro Forma Invoice',
          link: '/pages/demo',
         }
         ] 
      },
      {
        title: 'Import',
         children:[
          { title: 'Pro Forma Invoice V2',
          link: '/pages/commercial/PiDetails',
          },
         { title: 'BTB/Margin LC',
          link: '/pages/demo',
         },
         { title: 'Import LC Charges Entry',
          link: '/pages/demo',
         },
         { title: 'BTB/Margin LC Amendment',
          link: '/pages/demo',
         },
         { title: 'Import Document Acceptance',
          link: '/pages/demo',
         },
         { title: 'Import Doc Acceptance-Non LC',
          link: '/pages/demo',
         },
         { title: 'Import Payment',
          link: '/pages/demo',
         },
         ] 
      },
      {
        title: 'Report',
         children:[
          { 
            title: 'Export LC Reports',
             children:[
              { title: 'Export LC/Sales Contract Report',
               link: '/pages/demo',
              },
              { title: 'File Wise Export Status',
               link: '/pages/demo',
              },
              { title: 'Export CI Statement',
               link: '/pages/demo',
              },
              { title: 'Order Wise Export Invoice Report',
               link: '/pages/demo',
              },
              { title: 'Export Statement as of today',
               link: '/pages/demo',
              },
              { title: 'Monthly Bank Submission/Export Status',
               link: '/pages/demo',
              },
              { title: 'Export LC/SC Statement For Custom',
               link: '/pages/demo',
              },
              { title: 'Export Statement Management Report',
               link: '/pages/demo',
              },
              { title: 'Export Proceed Realization Report',
               link: '/pages/demo',
              },
              { title: 'Packing Credit Liability Report',
               link: '/pages/demo',
              },
             ]
          },
          { 
            title: 'MIS Reports',
             children:[
              { title: 'BTB Liability Coverage Report',
               link: '/pages/demo',
              },
              { title: 'Monthly Export Import',
               link: '/pages/demo',
              },
              { title: 'Export Import Status Report [Peak]',
               link: '/pages/demo',
              },
              { title: 'File Wise Yarn Status',
               link: '/pages/demo',
              }
            
          
             ]
          },
          { 
            title: 'Import LC Reports',
             children:[
              { title: 'BTB or Margin LC Report',
               link: '/pages/demo',
              },
              { title: 'Import CI Statement',
               link: '/pages/demo',
              },
              { title: 'Purchase Recap',
               link: '/pages/demo',
              },
              { title: 'Import Acceptance Statement',
               link: '/pages/demo',
              },
              { title: 'Yarn Procurement Progress Report',
               link: '/pages/demo',
              },
              { title: 'Purchase Recap Report2',
               link: '/pages/demo',
              },
              { title: 'Bank Certificate',
               link: '/pages/demo',
              },
              { title: 'BTB Liability Report',
               link: '/pages/demo',
              },
              { title: 'EDF Liability Report',
               link: '/pages/demo',
              },
              { title: 'EDF Liability Summery Report',
               link: '/pages/demo',
              },
              { title: 'EDF Liability Management Report',
               link: '/pages/demo',
              },
              { title: 'Yarn Work Order Statement',
               link: '/pages/demo',
              }
             ]
          },
         ]
      },
    ]
  },
  {
    title: 'Inventory',
    icon: 'keypad-outline',
    children:[
      {
        title: 'Purchase Requisition',
         link: '/pages/demo', 
      },
      {
        title: 'Item Issue Requisiton',
         link: '/pages/demo', 
      },
      {
        title: 'Store Item Inquiry',
         link: '/pages/demo', 
      },
      {
        title: 'Stock Revaluation',
         link: '/pages/demo', 
      },
      {
        title: 'Yarn Store',
         children:[
          { title: 'Yarn Receive',
          link: '/pages/demo',
         },
         { title: 'Yarn Receive Return',
          link: '/pages/demo',
         },
         { title: 'Yarn Issue',
          link: '/pages/demo',
         },
         { title: 'Yarn Issue Return',
          link: '/pages/demo',
         },
         { title: 'Yarn Order To Order Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Yarn Bag Receive',
          link: '/pages/demo',
         },
         { title: 'Yarn Test',
          link: '/pages/demo',
         }
         ] 
      },
      {
        title: 'Gate Entry',
         children:[
          { title: 'Gate In Entry',
          link: '/pages/demo',
         },
         { title: 'Gate Pass Entry',
          link: '/pages/demo',
         },
         { title: 'Gate Out Entry',
          link: '/pages/demo',
         },
         { title: 'Material/Goods Parking',
          link: '/pages/demo',
         }
        
         ] 
      },
      {
        title: 'Grey Fabric Store',
         children:[
          { title: 'Knit Grey Fabric Receive',
          link: '/pages/demo',
         },
         { title: 'Knit Grey Fabric Receive Return',
          link: '/pages/demo',
         },
         { title: 'Knit Grey Fabric Roll Receive',
          link: '/pages/demo',
         },
         { title: 'Woven Grey Fabric Receive',
          link: '/pages/demo',
         },
         { title: 'Woven Grey Fabric Receive Return',
          link: '/pages/demo',
         },
         { title: 'Knit Grey Fabric Issue',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Roll Issue',
          link: '/pages/demo',
         },
         { title: 'Knit Grey Fabric Issue Return',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Order To Order Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Order To Sample Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Sample To Order Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Roll Wise Grey Fabric Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Roll wise Grey Fabric Order To Order Transfer Entry',
          link: '/pages/demo',
         },
         { title: 'Grey Fabric Issue Return Roll Wise',
          link: '/pages/demo',
         },
         { title: 'Roll wise Grey Fabric Order To Sample Transfer',
          link: '/pages/demo',
         },
         { title: 'Roll wise Grey Fabric SampleTo Sample Transfer',
          link: '/pages/demo',
         },
         ] 
      },
      {
        title: 'Finish Fabric Store',
         children:[
          { 
            title: 'Knit Finish Fabric Receive By Garments',
            link: '/pages/demo',
          },
          { 
            title: 'Knit Finish Fabric Receive Return By Garments',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Fabric Roll Receive By Store',
            link: '/pages/demo',
          },
          { 
            title: 'Woven Finish Fabric Roll Issue',
            link: '/pages/demo',
          },
          { 
            title: 'Woven Finish Fabric Receive',
            link: '/pages/demo',
          },
          { 
            title: 'Knit Finish Fabric Issue',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Roll Splitting Before Issue',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Fabric Roll Issue',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Fabric Transfer Entry',
            link: '/pages/demo',
          },
          { 
            title: 'Woven Finish Fabric Issue',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Fabric Order To Order Transfer Entry',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Fabric Issue Return',
            link: '/pages/demo',
          },
          { 
            title: 'Finish Roll Issue Return',
            link: '/pages/demo',
          },
          { 
            title: 'Roll wise Finish Fabric Order To Order Transfer Entry',
            link: '/pages/demo',
          },
          { 
            title: 'Woven Finish Roll Issue Return',
            link: '/pages/demo',
          },
          { 
            title: 'Roll wise Finish Fabric Sample To Sample Transfer Entry',
            link: '/pages/demo',
          },
          { 
            title: 'Trims Store',
             children:[
              { title: 'Trims Receive Entry Multi Ref.',
               link: '/pages/demo',
              },
              { title: 'Trims Receive Return Entry',
               link: '/pages/demo',
              },
              { title: 'Trims Issue',
               link: '/pages/demo',
              },
              { title: 'Trims Issue Return',
               link: '/pages/demo',
              },
              { title: 'Trims Order To Order Transfer Entry',
               link: '/pages/demo',
              },
              { title: 'Trims Transfer Entry',
               link: '/pages/demo',
              },
              { title: 'Trims Issue Multi Ref',
               link: '/pages/demo',
              },
              
            
          
             ]
          },
          { 
            title: 'General Store',
             children:[
              { 
                title:'General Item Receive Breakdown',
                 children:[
                   {
                    title: 'General Accessories',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Spare Parts and Machineries',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Stationeries',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Electrical',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Maintenance',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Medical',
                    link: '/pages/demo',
                   },
                   {
                    title: 'ICT',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Utilities and Lubricants',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Construction Materials',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Printing Chemicals and Dyes',
                    link: '/pages/demo',
                   },
                   {
                    title: 'General Item Receive Return',
                    link: '/pages/demo',
                   },
                 ]
              }
              
             
             
             ]
          },
          { 
            title: 'General Item Issue Breakdown',
             children:[
              { 
                title:'General Accessories',
                 children:[
                   {
                    title: 'Spare Parts and Machineries                    ',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Stationeries',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Electrical',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Maintenance',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Medical',
                    link: '/pages/demo',
                   },
                   {
                    title: 'ICT',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Utilities and Lubricants',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Construction Materials',
                    link: '/pages/demo',
                   },
                   {
                    title: 'Printing Chemicals and Dyes',
                    link: '/pages/demo',
                   },
                   {
                    title: 'General Item Issue Return',
                    link: '/pages/demo',
                   },
                   {
                    title: 'General Item Transfer',
                    link: '/pages/demo',
                   },
                   {
                    title: 'General Item Issue',
                    link: '/pages/demo',
                   },
                   {
                    title:'General Item Receive',
                    link:'/pages/demo',
                   },
                   
                 ]
              }
              
             
             
             ]
          },
          { 
            title: 'Scrap Store',
             children:[
              { 
                title:'Scrap Out Entry',
                link: '/pages/demo',
                 
              }
              
             
             
             ]
          },
          { 
            title: 'Report',
             children:[
              { 
                title:'Yarn',
                children:[
                  {
                    title:'Yarn Item Allocation Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Yarn Item Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Daily Yarn Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'File wise yarn Receive',
                    link: '/pages/demo',
                  },
                  {
                    title:'Daily Yarn Issue Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Yarn Ageing Stock Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'File wise yarn Issue',
                    link: '/pages/demo',
                  },
                  {
                    title:'LC Wise Yarn Receive',
                    link: '/pages/demo',
                  },
                  {
                    title:'Party Wise Yarn Reconciliation',
                    link: '/pages/demo',
                  },
                  {
                    title:'Job/Order Wise Yarn Issue Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Job/Order Wise Dyed Yarn Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'PI Wise Yarn Receive',
                    link: '/pages/demo',
                  },
                  {
                    title:'CPA Yarn Issue Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'MRR Wise Yarn Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Yarn Cost',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Yarn Cost 2',
                    link: '/pages/demo',
                  },
                  {
                    title:'Yarn Reject Item Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Non Order Dyed Yarn Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'BTB LC Balance Statements For Yarn',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Yarn Purchase Requisition',
                    link: '/pages/demo',
                  },
                  {
                    title:'Yarn Utilization Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Lot Wise Yarn Transaction Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Party Wise Yarn Reconciliation Summary',
                    link: '/pages/demo',
                  },
                  {
                    title:'Sales Order Wise Dyed Yarn Report',
                    link: '/pages/demo',
                  },
                ]
                 
              },
              { 
                title:'Grey Fabric Store',
                children:[
                  {
                    title:'Closing Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Grey Fabrics Stock Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Grey Fabric Issue Status',
                    link: '/pages/demo',
                  },
                  {
                    title:'Grey Fabric Item Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Party Wise Grey Fabric Reconciliation',
                    link: '/pages/demo',
                  },
                  {
                    title:'Party Wise Grey Fabric Issue Recv Reconciliation',
                    link: '/pages/demo',
                  },
                  {
                    title:'File Ref. Wise Grey Fabrics Stock Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Store Location Wise Grey Fabrics Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Ref. To Ref. Transfer Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Ref. To Ref. Transfer Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Ref. To Ref. Transfer Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Grey Fabrics Stock Report FFL',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Grey Fabrics Stock Consolidated Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Knitting Program Wise Grey Fabrics Stock [Sales Order]',
                    link: '/pages/demo',
                  },
                  {
                    title:'Dyeing Party Ledger Report',
                    link: '/pages/demo',
                  }
                 
                 
              
                ]
                 
              },
              { 
                title:'Trims Store',
                children:[
                  {
                    title:'Order Wise Trims Receive Issue and Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Trims Issue (FIFO)',
                    link: '/pages/demo',
                  },
                  {
                    title:'Trims Item Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Closing Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Style Wise Trims Received Issue And Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Trims Age Analysis Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Style Wise Trims Received Issue And Stock - V2',
                    link: '/pages/demo',
                  },
                  {
                    title:'Buyer Wise Trim Closing Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Trims Order Wise Item Ledger',
                    link: '/pages/demo',
                  }                               
              
                ]
                 
              },
              { 
                title:'General Store',
                children:[
                  {
                    title:'Closing Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Item Wise Purchase',
                    link: '/pages/demo',
                  },
                  {
                    title:'Periodical Purchase',
                    link: '/pages/demo',
                  },
                  {
                    title:'General Item Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Machine Wise Cost Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Department Wise Issue Report',
                    link: '/pages/demo',
                  }                                                             
                ]
                 
              },
              { 
                title:'Finish Fabric Store',
                children:[
                  {
                    title:'Finish Fabric Closing Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order and Color Wise Finish Fabric Stock Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Finish Fabric Item Ledger',
                    link: '/pages/demo',
                  },
                  {
                    title:'Order Wise Finish Fabric Stock',
                    link: '/pages/demo',
                  },
                  {
                    title:'Style Wise Finish Fabric Status',
                    link: '/pages/demo',
                  },
                                                                         
                ]
                 
              },
              { 
                title:'Scrap Store',
                children:[
                  {
                    title:'Yarn Reject Report',
                    link: '/pages/demo',
                  },
                  {
                    title:'Grey Fabric Reject Report',
                    link: '/pages/demo',
                  }
                  
                                                                         
                ]
                 
              },
              { 
                title:'Daily Gate In And Out Report',
                link: '/pages/demo',
                 
              },
              { 
                title:'Date Wise Item Receive and Issue',
                link: '/pages/demo',
                 
              },
              { 
                title:'Gate In and Out Report',
                link: '/pages/demo',
                 
              },
              { 
                title:'Item Transfer Report',
                link: '/pages/demo',
                 
              },
              { 
                title:'Date Wise Item Receive and Issue Multi Category Report',
                link: '/pages/demo',
                 
              },
              { 
                title:'Supplier Wise Goods Receive Statement Report',
                link: '/pages/demo',
                 
              },
              { 
                title:'Store Wise Closing Stock Report',
                link: '/pages/demo',
                 
              },
              { 
                title:'Store Wise Item Inquiry',
                link: '/pages/demo',
                 
              },
              { 
                title:'All Item Inquiry',
                link: '/pages/demo',
                 
              },
              
             
             
             ]
          },
         ]
      },
    ]
  },
  {
    title: 'Production',
    icon: 'keypad-outline',
    children:[
     
      {
        title: 'Knit Composit',
         children:[
          { 
          title: 'Fabric Production',
           children:[
             {
              title: 'Knitting Production',
              link: '/pages/demo',
             },
             {
              title: 'Grey Fabric Delivery to Store',
              link: '/pages/demo',
             },
             {
              title: 'Roll Wise Grey Fabric Delivery to Store',
              link: '/pages/demo',
             },
           ]
          }
        
        
         
         ] 
      },
     
      {
        title: 'Garments Production',
         children:[
          { 
          title: 'Finish Fabric Requisition for Cutting',
          link: '/pages/demo',
          },
          { 
          title: 'Finish Fabric Roll Receive By Cutting',
          link: '/pages/demo',
          },
          { 
          title: 'Cutting Entry',
          link: '/pages/demo',
          },
          { 
          title: 'Cutting QC',
          link: '/pages/demo',
          },
          { 
          title: 'Cutting QC Urmi',
          link: '/pages/demo',
          },
          { 
          title: 'Cutting Delivery To Input Challan',
          link: '/pages/demo',
          },
          { 
          title: 'Embellishment Issue Entry',
          link: '/pages/demo',
          },
          { 
          title: 'Embellishment Receive Entry',
          link: '/pages/demo',
          },
          { 
          title: 'Actual Production Resource Entry',
          link: '/pages/demo',
          },
          { 
          title: 'Sewing Input',
          link: '/pages/demo',
          },
          { 
          title: 'Sewing Output',
          link: '/pages/demo',
          },
          { 
          title: 'Sewing Output Gross Qty',
          link: '/pages/demo',
          },
          { 
          title: 'Print Issue Entry page',
          link: '/pages/demo',
          },
          { 
          title: 'Production Scanning',
          link: '/pages/demo',
          },
          { 
          title: 'Print Receive Entry page',
          link: '/pages/demo',
          },
          { 
          title: 'Iron entry',
          link: '/pages/demo',
          },
          { 
          title: 'Packing And Finishing',
          link: '/pages/demo',
          },
          { 
          title: 'Finish Garments Order to Order transfer',
          link: '/pages/demo',
          },
          { 
          title: 'Buyer Inspection',
          link: '/pages/demo',
          },
          { 
          title: 'Ex-Factory',
          link: '/pages/demo',
          },
          { 
          title: 'Garments Delivery Entry',
          link: '/pages/demo',
          },
          { 
          title: 'Garments Ex-Factory Return',
          link: '/pages/demo',
          },
          { 
          title: 'Line Allocation Import',
          link: '/pages/demo',
          },
          { 
          title: 'Poly Entry',
          link: '/pages/demo',
          },
          { 
          title: 'Order Wise Used Minute',
          link: '/pages/demo',
          },
        
        
         
         ] 
      },
      {
        title: 'Report',
         children:[
          { 
          title: 'Fabric Production',
          children:[
            {
              title: 'Fabric Production Status Report',
              link: '/pages/demo',
            },
            {
              title: 'Knit and Dyeing Load Report',
              link: '/pages/demo',
            },
            {
              title: 'Daily Yarn Delivery Status',
              link: '/pages/demo',
            },
            {
              title: 'Daily Knitting Production Report-Sales',
              link: '/pages/demo',
            },
            {
              title: 'Daily Knitting Production Report',
              link: '/pages/demo',
            },
            {
              title: 'Machine Wise Knitting Production Report',
              link: '/pages/demo',
            },
            {
              title: 'Daily Dyeing Produciton analysis report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Receive Status Without Order',
              link: '/pages/demo',
            },
            {
              title: 'Buyer-Order Wise Knitting Status Report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Finishing Report',
              link: '/pages/demo',
            },
            {
              title: 'Daily Finished Fabric Production Report',
              link: '/pages/demo',
            },
            {
              title: 'Knitting Program Wise Grey Fabrics Stock',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Issue to Finish Process and Fab Service Receive Report',
              link: '/pages/demo',
            },
            {
              title: 'Knitting Requirement Report For Period',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Receive Status Report 2',
              link: '/pages/demo',
            },
            {
              title: 'Knitting History',
              link: '/pages/demo',
            },
            {
              title: 'Machine Idle Time/Breakdown Report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Production Reject Status Report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Receive Status Without Order2',
              link: '/pages/demo',
            },
            {
              title: 'Roll Position Tracking Report',
              link: '/pages/demo',
            },
            {
              title: 'Knitting Production And Plan Report',
              link: '/pages/demo',
            },
            {
              title: 'Roll Position Tracking Report For Sales',
              link: '/pages/demo',
            },
            {
              title: 'Batch Plan and Dyeing Status Report',
              link: '/pages/demo',
            },
            {
              title: 'Color Wise Knitting Production Report',
              link: '/pages/demo',
            },
            {
              title: 'Knitting Production QC Result Report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Sales Order Report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Production Status Report - Sales Order',
              link: '/pages/demo',
            },
            {
              title: 'Grey Fabric Bar-code Striker Export Report',
              link: '/pages/demo',
            },
            {
              title: 'Production Status Summary Report',
              link: '/pages/demo',
            },
            {
              title: 'Date Wise Grey Fabric Delivery to Store Report',
              link: '/pages/demo',
            },
          ]
          },
          { 
          title: 'Garments Production',
         children:[
          {
            title: 'Order Wise Production Report',
            link: '/pages/demo',
          },
          {
            title: 'Date Wise Production Report [CM]',
            link: '/pages/demo',
          },
          {
            title: 'Line Wise Hourly Production',
            link: '/pages/demo',
          },
          {
            title: 'Date Wise Production Report [Without CM Value]',
            link: '/pages/demo',
          },
          {
            title: 'Line Wise Productivity Analysis',
            link: '/pages/demo',
          },
          {
            title: 'Date Wise Production Report',
            link: '/pages/demo',
          },
          {
            title: 'Factory Monthly Production Report',
            link: '/pages/demo',
          },
          {
            title: 'Daily Cutting And Input Inhand Report',
            link: '/pages/demo',
          },
          {
            title: 'Date Wise Production WIP Report',
            link: '/pages/demo',
          },
          {
            title: 'Hourly Production Monitoring Report',
            link: '/pages/demo',
          },
          {
            title: 'Style Wise Production Report',
            link: '/pages/demo',
          },
          {
            title: 'Hourly Production Graph',
            link: '/pages/demo',
          },
          {
            title: 'Line Wise Productivity Analysis [Without CM]',
            link: '/pages/demo',
          },
          {
            title: 'Challan Wise Sewing Input/Output',
            link: '/pages/demo',
          },
          {
            title: 'Order Wise RMG Production Status',
            link: '/pages/demo',
          },
          {
            title: 'Daily Production Progress Report',
            link: '/pages/demo',
          },
          {
            title: 'Line Item Wise Hourly Production',
            link: '/pages/demo',
          },
          {
            title: 'Ironing Wages Bill',
            link: '/pages/demo',
          },
          {
            title: 'Order Wise Wages Bill Statement',
            link: '/pages/demo',
          },
          {
            title: 'Inspection Followup Report',
            link: '/pages/demo',
          },
          {
            title: 'Production QC Report',
            link: '/pages/demo',
          },
          {
            title: 'Consolidated Sewing Production Report',
            link: '/pages/demo',
          },
          {
            title: 'Garments Subcontact Statement',
            link: '/pages/demo',
          },
          {
            title: 'Line Allocation Report',
            link: '/pages/demo',
          },
          {
            title: 'Hourly Poly Monitoring Report',
            link: '/pages/demo',
          },
          {
            title: 'Daily Cutting And Input Inhand Report 2',
            link: '/pages/demo',
          },
          {
            title: 'Daily efficiency report',
            link: '/pages/demo',
          },
          {
            title: 'Daily QC Analysis Report',
            link: '/pages/demo',
          },
          {
            title: 'Factory Monthly Production Report for Urmi',
            link: '/pages/demo',
          },
          {
            title: 'Monthly Shipment Status',
            link: '/pages/demo',
          },
          {
            title: 'Sewing MIS Report',
            link: '/pages/demo',
          },
          {
            title: 'Line Wise Sewing Production Report',
            link: '/pages/demo',
          },
          {
            title: 'Sewing Production Value',
            link: '/pages/demo',
          },
          {
            title: 'Daily Line Wise Sewing Input Status Report',
            link: '/pages/demo',
          },
          {
            title: 'Emb. Issue Challan',
            link: '/pages/demo',
          },
          {
            title: 'Emb. Received Challan',
            link: '/pages/demo',
          },
          {
            title: 'Sewing Input Challan',
            link: '/pages/demo',
          },
          {
            title: 'Multi-Company Hourly Production Monitoring',
            link: '/pages/demo',
          },
          {
            title: 'Multiple Factory Production Report',
            link: '/pages/demo',
          }
          
         ]
         

        },
        {
          
            title: 'Line Wise Productivity Analysis [CM With Value]',
            link: '/pages/demo',
          
        },
        {
          
            title: 'Pending Bill Status Report',
            link: '/pages/demo',
          
        },
        {
          
            title: 'Unit Wise Production 2',
            link: '/pages/demo',
          
        },
        
         
         ] 
      },
     
    ]
  },
  {
    title: 'Admin',
    icon: 'keypad-outline',
    children:[
     
      {
        title: 'User Management',
        link: '/pages/demo',
      },
      {
        title: 'Password Management',
        link: '/pages/demo',
      },
      {
        title: 'User Credentials',
        link: '/pages/demo',
      },
      {
        title: 'Privilege Management',
        link: '/pages/demo',
      },
      {
        title: 'Module Management',
        link: '/pages/demo',
      },
      {
        title: 'Activities Grouping',
        link: '/pages/demo',
      },
      {
        title: 'Menu Management',
        link: '/pages/demo',
      },
      {
        title: 'Database Backup',
        link: '/pages/demo',
      },
      {
        title: 'Image Backup',
        link: '/pages/demo',
      },
      {
        title: 'Database Restore',
        link: '/pages/demo',
      },
      {
        title: 'Log Reports',
        children:[
          {
            title: 'User Privilege Report',
            link: '/pages/demo',
          },
          {
            title: 'Login History',
            link: '/pages/demo',
          },
          {
            title: 'Activities History',
            link: '/pages/demo',
          },
          {
            title: 'Active Login History',
            link: '/pages/demo',
          },
        ]
      },
      {
        title: 'Home Dash Board Privilege',
        link: '/pages/demo',
      },
      {
        title: 'Field Level Access',
        link: '/pages/demo',
      },
      {
        title: 'User Preference',
        link: '/pages/demo',
      },
      {
        title: 'Quick Costing Backup',
        link: '/pages/demo',
      },
      {
        title: 'Quick Costing Restore',
        link: '/pages/demo',
      },
     
      
     
    ]
  },
  {
    title: 'Approval',
    icon: 'keypad-outline',
    children:[
     
      {
        title: 'Electronic Approval Setup',
        link: '/pages/demo',
      },
      {
        title: 'Price Quotation Approval',
        link: '/pages/demo',
      },
      {
        title: 'Price Quotation Approval Single Phase',
        link: '/pages/demo',
      },
      {
        title: 'Pre-Costing Approval',
        link: '/pages/demo',
      },
      {
        title: 'Booking Approval Report',
        link: '/pages/demo',
      },
      {
        title: 'Component Wise Precost Approval',
        link: '/pages/demo',
      },
      {
        title: 'Fabric Booking Approval New',
        link: '/pages/demo',
      },
      {
        title: 'New Pre Costing Approval',
        link: '/pages/demo',
      },
      {
        title: 'PI Approval',
        link: '/pages/demo',
      },
      {
        title: 'Fabric Sales Order Approval',
        link: '/pages/demo',
      },
      {
        title: 'Short Fabric Booking Approval New',
        link: '/pages/demo',
      },
      {
        title: 'All Approval',
        link: '/pages/demo',
      },
      {
        title: 'PI Approval New',
        link: '/pages/demo',
      },
      {
        title: 'Sample Booking (Without Order) Approval New',
        link: '/pages/demo',
      },
      {
        title: 'Sample Fabric Booking Aproval-With order',
        link: '/pages/demo',
      },
      {
        title: 'Yarn Work Order Approval New',
        link: '/pages/demo',
      },
      {
        title: 'Yarn Delivery Approval',
        link: '/pages/demo',
      },
      {
        title: 'Trims Booking Approval',
        link: '/pages/demo',
      },
      {
        title: 'Dyeing Batch Approval',
        link: '/pages/demo',
      },
      {
        title: 'Reports',
        children:[
            {
              title: 'Pre-costing approval report',
              link: '/pages/demo',
            },
            {
              title: 'Fabric Booking Approval Status',
              link: '/pages/demo',
            },
            {
              title: 'Sample Booking (Without Order) Approval Status',
              link: '/pages/demo',
            },
            {
              title: 'Trims Approval Report',
              link: '/pages/demo',
            },
            {
              title: 'Pro Forma Invoice Approval Status Report',
              link: '/pages/demo',
            },
        ]
      },
      {
        title: 'Report 2',
        children:[
          {
            title: 'Fabric Booking Approval Status',
            link: '/pages/demo',
          },
          {
            title: 'Sample Booking (Without Order) Approval Status',
            link: '/pages/demo',
          },
          {
            title: 'Sample Booking [With Order] Approval Status',
            link: '/pages/demo',
          },
        ]
      },
      {
        title: 'Dyes and Chemical Work Order Approval',
        link: '/pages/demo',
      },
      {
        title: 'Stationary Work Order Approval',
        link: '/pages/demo',
      },
      {
        title: 'Other Purchase WO Approval',
        link: '/pages/demo',
      },
      {
        title: 'Gate Pass Activation Approval',
        link: '/pages/demo',
      },
      {
        title: 'Yarn Requisition Approval',
        link: '/pages/demo',
      },
      {
        title: 'New User Approval',
        link: '/pages/demo',
      },
      {
        title: 'GSD Approval',
        link: '/pages/demo',
      },
      {
        title: 'Purchase Requisition Approval',
        link: '/pages/demo',
      },
      {
        title: 'Sample Requisition Approval',
        link: '/pages/demo',
      },
      {
        title: 'Approval Necessity Setup',
        link: '/pages/demo',
      },
      {
        title: 'Price Quotation Approval Single Layer',
        link: '/pages/demo',
      },
      {
        title: 'Item Issue Requisiton Approval',
        link: '/pages/demo',
      },
      {
        title: 'Service Booking AOP Approval',
        link: '/pages/demo',
      },
      {
        title: 'Service Booking For Knitting Approval',
        link: '/pages/demo',
      },
      {
        title: 'Post Integration Unlock',
        link: '/pages/demo',
      },
    ]
  },
  {
    title: 'Accounting',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Commercial',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Daying',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Human Resource',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Library',
    icon: 'map-outline',

    children: [
      {
        title: 'Contact Details',

       children: [
        {
          title: 'Buyer Profile',     
          link: '/pages/buyer-profile',
        },
        // {
        //   title: 'Casecadding',     
        //   link: '/pages/test-casecaddingDDL',
        // },
        {
          title: 'Supplier Profile',
          link: '/pages/supplier-profile',
        },
        {
          title: 'Other Party Profile', 
          link: '/pages/other-party-profile',
        }
      ]

      },
      {
        title: 'Item Details',

       children: [
        {
          title: 'Yarn Count',     
          link: '/pages/yarn-count',
        },
        {
          title: 'Yarn Brand',
          link: '/pages/yarn-brand',
        },
        {
          title: 'Item Group',
          link: '/pages/item-group',
        },
        {
          title: 'Item Account Creation',
          link: '/pages/item-account-creation',
        },
      ]

      },    
      {
        title: 'Marchandizing Details',

       children: [
        {
          title: 'Yarn Count Determination',     
          link: '/pages/yarn-count-determination',
        },
        {
          title: 'Trims Costing Template',
          link: '/pages/trims-costing-template',
        },
        {
          title: 'Garments Sample Entry',
          link: '/pages/garments-sample-entrie',
        },
        {
          title: 'Marketing Team Info',
          link: '/pages/marketing-team-info',
        },
        {
          title: 'Members Info',
          link: '/pages/member-info',
        },
        {
          title: 'Financial Parameter Setup',
          link: '/pages/financial-parameter-setup',
        },
        {
          title: 'Capacity Calculation',
          link: '/pages/add-capacity-calculation',
        },
        {
          title: 'Capacity Allocation',
          link: '/pages/capacity-allocations',
        },
        {
          title: 'Product Sub Department',
          link: '/pages/product-sub-department',
        },
        {
          title: 'Finish Gmts Capacity Calculation',
          link: '/pages/finsih-gmts-capacity-calculation',
        },
        {
          title: 'Color Entry',
          link: '/pages/colour-entry',
        },
        {
          title: 'TNA Task Percent',
          link: '/pages/tNA-task-percent',
        },
        {
          title: 'Size Entry',
          link: '/pages/size-entry',
        },
        {
          title: 'Terms and Condition Entry',
          link: '/pages/demo',
        },
        {
          title: 'Yarn Rate',
          link: '/pages/yarn-rate',
        },
        {
          title: 'Lab Test Rate Chart',
          link: '/pages/lab-test-rate-chart',
        },
        {
          title: 'Composition Entry',
          link: '/pages/composition',
        },
        {
          title: 'Excess Cut Slab Entry',
          link: '/pages/demo',
        }, {
          title: 'Country Location Mapping',
          link: '/pages/country-location-mapping',
        },
         {
          title: 'Depo Location Mapping',
          link: '/pages/depo-location-mapping', 
        },
         {
          title: 'Buyer Wise Season Entry',
          link: '/pages/Buyer-Wies-Season-list',
        },
       
        {
          title: 'Country Name Entry',
          link: '/pages/show-country',
        },
        {
          title: 'Garments Item Entry',
          link: '/pages/garments-item-entries',
        },
        {
          title: 'Min Lib Time Slab',
          link: '/pages/min-lead-time-slabs',
        },
        {
          title: 'Excess Trim Standard Setup',
          link: '/pages/demo',
        },
        {
          title: 'Excess Trim Standard Setup',
          link: '/pages/demo',
        },
        {
          title: 'Body Part Entry',
          link: '/pages/body-part-entry',
        },
        {
          title: 'Item Catagory',
          link: '/pages/item-category',
        },
        {
          title: 'Part Type',
          link: '/pages/party-type',
        },
        {
          title: 'TNA Task Name Entry',
          link: '/pages/tNA-task-name',
        },
        {
          title: 'TNA Task Entry',
          link: '/pages/tNA-task-entries',
        },
        {
          title: 'Trims Group',
          link: '/pages/trims-group',
        },
        {
          title: 'Location Information',
          link: '/pages/show-location',
        },
        {
          title: 'Page Info',
          link: '/pages/page-info',
        },
        {
          title: 'TestReport',
          link: '/pages/test',
        },
        
        // {
        //   title: 'Fabric Description',
        //   link: '/pages/FabricDesPreCost-list',
        // },
      ]

      },
      {
        title: 'Cost Center',
       children: [
        {
          title: 'Group Profile',     
          link: '/pages/group-profile',
        },
        {
          title: 'Division Profile',
          link: '/pages/division-profile',
        },
        {
          title: 'Department Profile',
          link: '/pages/department-profile',
        },
        {
          title: 'Section Profile',
          link: '/pages/section-profile',
        },
        {
          title: 'Profit Center',
          link: '/pages/profit-center',
        }
      ]

      },
      {
        title: 'Production',
       children: [
        {
          title: 'Sewing Line',     
          link: '/pages/sewing-line',
        },
        {
          title: 'Sewing Operation',
          link: '/pages/sewing-operation',
        },
        {
          title: 'Machine Entry',
          link: '/pages/machine-entrie',
        },
        {
          title: 'Production Floor',
          link: '/pages/production-floor',
        },
        {
          title: 'Sample Production Team',
          link: '/pages/sample-production-team',
        }
      ]

      } ,
      {
        title: 'Subcontract',
       children: [
        {
          title: 'Knitting Charge',     
          link: '/pages/knitting-charge',
        },
        {
          title: 'Dyeing and Finishing Charge',
          link: '/pages/dyeing-And-finishing-charge',
        },
    
      ]

      },
      {
        title: 'Accounting',
       children: [
        {
          title: 'Sup Group',     
          link: '/pages/demo',
        },
        {
          title: 'Journal Setup',
          link: '/pages/Journal-Setup-list',
        },
        {
          title: 'Shareholder',
          link: '/pages/add-shareholder',
        },
        {
          title: 'Accounting Year',
          link: '/pages/demo',
        },
        {
          title: 'Integration Setup',
          link: '/pages/demo',
        },
    
      ]

      },
      {
        title: 'Variable Settings',
       children: [
        {
          title: 'Merchandising',     
          link: '/pages',
        },
        // {
        //   title: 'VariableList',     
        //   link: '/pages/Variable-List',
        // },
        {
          title: 'TNA',
          link: '/pages/demo',
        },
        {
          title: 'Planning',
          link: '/pages/Planning-variable-settings',
        },
        {
          title: 'Commercial',
          link: '/pages/Commercial-variable-settings',
        },
        {
          title: 'Production',
          link: '/pages/Production-variable-settings',
        },
        {
          title: 'Inventory',
          link: '/pages/Inventory-variable-settings',
        },
        {
          title: 'Accounting',
          link: '/pages/demo',
        },
        {
          title: 'Subcontract',
          link: '/pages/Subcontract-variable-settings',
        },
        {
          title: 'Report Setting',
          link: '/pages/ReportSetting-list',
        },
        {
          title: 'Report Signature',
          link: '/pages/demo',
        },
        {
          title: 'Report Setting Privilege Management',
          link: '/pages/demo',
        },
    
      ]

      },
      {
        title: 'General',
       children: [
        {
          title: 'Bank Info',     
          link: '/pages/BankInfo-list',
        },
        {
          title: 'TNA Mail Setup',
          link: '/pages/TnaMailSetup',
        },
        {
          title: 'Store Location',
          link: '/pages/store-location',
        },
        {
          title: 'Email Address Setup',
          link: '/pages/email-address-setup',
        },
        {
          title: 'Mail Recipient Group',
          link: '/pages/mail-recipient-group',
        },
        {
          title: 'Fast React Intgration',
          link: '/pages/fast-react-intgration',
        },
        {
          title: 'Fastreact Comparison',
          link: '/pages/demo',
        },
        {
          title: 'Employee Info',
          link: '/pages/EmployeeInfo-list',
        },
        {
          title: 'Currency Conversion Rate',
          link: '/pages/currency-conversion-rate',
        },
        {
          title: 'Dynamic Letter',
          link: '/pages/demo',
        },
      
    
      ]

      } ,
      {
        title: 'Report',
       children: [
        {
          title: 'Supplier List',     
          link: '/pages/demo',
        },
        {
          title: 'Store Item List',
          link: '/pages/demo',
        },
        {
          title: 'Test Report',
          link: '/pages/Report',
        },
    
      ]

      },
    ],
  },

  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
        children: [
          { title: 'Echarts',
          link: '/pages/charts/echarts'
          },
          {
            title: 'Charts.js',
            link: '/pages/charts/chartjs',
          },
        ],
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
      {
        title: 'User Mapping',
        link: '/pages/user-mapping',
      },
    ],
  },
];
