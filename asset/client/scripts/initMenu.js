// Fixed Asset Menu
var accntsMenu 	= mainwindow.findChild("menu.accnt");
var reptMenu	= mainwindow.findChild("menu.accnt.financialreports");

// Asset menu
var assetMenu 	= new QMenu(qsTr("Fixed Assets"),mainwindow);
accntsMenu.insertMenu(reptMenu.menuAction(), assetMenu);

// Separator
toolbox.menuInsertSeparator(accntsMenu, reptMenu);

// Add Asset actions
var newAction = assetMenu.addAction(qsTr("New..."), mainwindow);
var listAction = assetMenu.addAction(qsTr("List..."), mainwindow);
var locationAction = assetMenu.addAction(qsTr("By Location..."), mainwindow);
assetMenu.addSeparator();
var typesAction = assetMenu.addAction(qsTr("Types..."), mainwindow);
var dispsAction = assetMenu.addAction(qsTr("Dispositions..."), mainwindow);

newAction.objectName = "fa.new_asset";
newAction.setData("MaintainFixedAsset");
newAction.enabled = privileges.value("MaintainFixedAsset");

listAction.objectName = "fa.list_asset";
listAction.setData("ViewFixedAsset");
listAction.enabled = privileges.value("ViewFixedAsset");

locationAction.objectName = "fa.asset_location";
locationAction.setData("ViewFixedAsset");
locationAction.enabled = privileges.value("ViewFixedAsset");

typesAction.objectName = "fa.asset_types";
typesAction.setData("ViewAssetType");
typesAction.enabled = privileges.value("ViewAssetType");

dispsAction.objectName = "fa.asset_disp";
dispsAction.setData("MaintainAssetDisposition");
dispsAction.enabled = privileges.value("MaintainAssetDisposition");

// Define function(s)
function sNewAsset()
{
  var wparams = new Object;
  wparams.mode = 0;
  wparams.retire = 0;
  var childwnd = toolbox.openWindow("fixedAsset",mainwindow, 0, 1);
  var tmp = toolbox.lastWindow().set(wparams);
}

function sListAssets()
{
  var wind = toolbox.openWindow("assetList", mainwindow);
}

function sListAssetLocations()
{
  var wind = toolbox.newDisplay("dspAssetLocation");
}

function sAssetTypes()
{
  var wind = toolbox.openWindow("assetTypeList", mainwindow);
}

function sAssetDisp()
{
  var wind = toolbox.openWindow("assetDispList", mainwindow);
}

// Connect Action(s)
newAction.triggered.connect(sNewAsset);
listAction.triggered.connect(sListAssets);
locationAction.triggered.connect(sListAssetLocations);
typesAction.triggered.connect(sAssetTypes);
dispsAction.triggered.connect(sAssetDisp);

// FIXED ASSET DESKTOP
// Define window functions
function openWindow(uiName)
{
  var wnd = toolbox.openWindow(uiName, mainwindow);
}

function newAsset()
{
 openWindow('fixedAsset');
}
function listAsset()
{
 openWindow('assetList');
}
function assetType()
{
 openWindow('assetTypeList');
}
function assetDisp()
{
 openWindow('assetDispList');
}
function purchaseAsset()
{
 openWindow('assetPurchase');
}
function depreciateAsset()
{
 openWindow('assetDepreciationAll');
}
function postAssetTrans()
{
 openWindow('assetTransactions');
}
function sellAsset()
{
 openWindow('assetSaleScrap');
}
function maintenanceTask()
{
 openWindow('maintTaskList');
}
function maintenancePlan()
{
 openWindow('maintPlanList');
}
function maintenanceClass()
{
 openWindow('maintClassList');
}
function maintenanceSchedule()
{
 openWindow('maintSchedule');
}
function maintenanceOrder()
{
 openWindow('maintOrderList');
}

// Add relevant actions (Required to manage extension package actions which won't be defined till later)
// We have to add these now as we are displaying a complete desktop

// Fixed Asset package
addAction("fa.new_asset","newAsset","MaintainFixedAsset","MaintainFixedAsset");
addAction("fa.list_asset","listAsset","ViewFixedAsset","ViewFixedAsset");
addAction("fa.asset_types","assetType","MaintainAssetType","MaintainAssetType");
addAction("fa.asset_disp","assetDisp","MaintainAssetDisposition","MaintainAssetDisposition");

// Depreciation Package
addAction("fa.purchase_asset","purchaseAsset","PurchaseFixedAsset","PurchaseFixedAsset");
addAction("fa.depreciate_assets","depreciateAsset","DepreciateFixedAsset","DepreciateFixedAsset");
addAction("fa.post_transactions","postAssetTrans","DepreciateFixedAsset","DepreciateFixedAsset");
addAction("fa.sell_asset","sellAsset","DisposeFixedAsset","DisposeFixedAsset");

// Maintenance Package
addAction("fa.maintenance_task","maintenanceTask","MaintainMaintenanceTask","MaintainMaintenanceTask");
addAction("fa.maintenance_plan","maintenancePlan","MaintainMaintenancePlan","MaintainMaintenancePlan");
addAction("fa.maintenance_class","maintenanceClass","MaintainMaintenanceClass","MaintainMaintenanceClass");
addAction("fa.maintenance_schedule","maintenanceSchedule","CreateMaintenanceOrder","CreateMaintenanceOrder");
addAction("fa.maintenance_orders","maintenanceOrder","CreateMaintenanceOrder","CreateMaintenanceOrder");

// Add Fixed Asset Desktop
var setup = addDesktop("desktopAssetManagement", "asset_management_32", "desktopFixedAsset");