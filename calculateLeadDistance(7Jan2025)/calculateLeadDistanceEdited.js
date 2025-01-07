if (getFromApi) {
    totalKmRun = await calKmFromApi(center1, center2)
    if (totalKmRun || totalKmRun == 0) {
        center1 = shipmentStages[i].place?.center ? 
            `${shipmentStages[i].place.center.latitude},${shipmentStages[i].place.center.longitude}` :
            (shipmentStages[i].hub?.center ? 
                `${shipmentStages[i].hub.center.latitude},${shipmentStages[i].hub.center.longitude}` : 
                null);
                
        center2 = shipmentStages[i + 1].hub?.center ?
            `${shipmentStages[i + 1].hub.center.latitude},${shipmentStages[i + 1].hub.center.longitude}` :
            (shipmentStages[i + 1].place?.center ?
                `${shipmentStages[i + 1].place.center.latitude},${shipmentStages[i + 1].place.center.longitude}` :
                null);

        totalKmRun = await calKmFromApi(center1, center2)
    }
    // ... rest of the code ...
}