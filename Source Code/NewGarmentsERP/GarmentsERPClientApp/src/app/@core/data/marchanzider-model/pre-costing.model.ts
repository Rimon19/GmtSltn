export class PreCosting {
    
    precostingId:number;
    orderId: any;
    costingDate:string;
    incoterm: string;
    incotermPlace: string;
    poId: string;
    buyerId: number;
    quotationId: number;
    approvedId: number;
    currencyId: number;
    jobQty: number;
    companyId: number;
    
    regionId: number;
    budgetMinuite: number;
    eR: number;
    cutSMV: number;
    cutEfficiency: number;
    sewSMV: number;
    sewEfficiency: number;
    styleRef: string;
    styleDesc: string;
    remark: string;
    agent: string;
    machineLine: string;
    prodLineHr: string;
    readyToApproved: string;
    imagesPath: string;
    fileno: string;
    internalRef: string;
    copyFrom: string;
    unapproverequest: string;
  

    style_Description: string;
    orderUOMId: number;
    
    //Name view  Proprty
    JobNo:String;
    companyName:string;
    buyerName:string;
    regionName:string;
    currencyName:string;
    orderUOMName:string;
    costingPer:string;

    status :string;
    entryDate :string;
    entryBy :string;

    merchandApprovalDate :string;
    merchandApproval: boolean;
    approvedByMerchandUserId :string;

    agmApprovalDate :string;
    agmApproval: boolean;
    approvedByAgmUserId :string;

     gmApprovalDate :string;
     gmApproval: boolean;
     approvedByGmUserId :string;

     mdApprovalDate :string;
     mdApproval: boolean;
     approvedByMdUserId :string;
  
}
