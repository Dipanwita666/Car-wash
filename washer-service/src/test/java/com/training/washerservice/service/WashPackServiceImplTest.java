package com.training.washerservice.service;
 
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
 
import java.util.ArrayList;
import java.util.List;
 
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import com.training.washerservice.model.AddOn;
import com.training.washerservice.model.WashPack;
import com.training.washerservice.repository.AddOnRepository;
import com.training.washerservice.repository.WashPackRepository;
import com.training.washerservice.wrapper.AddOnList;
import com.training.washerservice.wrapper.StringList;
import com.training.washerservice.wrapper.WashPackList;
 
class WashPackServiceImplTest {
 
    WashPackServiceImpl washPackService;

    AddOnServiceImpl addOnService;

    @BeforeEach
    void initEach() {
        WashPackRepository mockWashPackRepository = mock(WashPackRepository.class);
        washPackService = new WashPackServiceImpl();
        washPackService.setRepository(mockWashPackRepository);
        AddOnRepository mockAddOnRepository = mock(AddOnRepository.class);
        addOnService = new AddOnServiceImpl();
        addOnService.setRepository(mockAddOnRepository);

    }

    @Test
    @DisplayName("Wash Pack insertion test")
    void testAddWasher() {
        WashPack washer = new WashPack();
        washer.setWashpackTitle("Silver Wash");
        washer.setWashpackDescription("Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray");
        washer.setWashpackPrice(400);
        when(washPackService.washrepo.save(washer)).thenReturn(washer);

        boolean validPriceIsSaved = washPackService.addWasher(washer);
        washer.setWashpackPrice(250);
        boolean invalidPriceIsSaved = washPackService.addWasher(washer);
        assertAll(
                () -> assertTrue(validPriceIsSaved, "Correct details validation of insertion"),
                () -> assertFalse(invalidPriceIsSaved, "Chekcing of invalid price for insertion")
                );    

    }


    @Test
    @DisplayName("All wash pack list test")
    void testGetAllWashpacks() {
        List<WashPack> allWashPacks = new ArrayList<>();
        WashPack washPack = new WashPack();
        washPack.setWashpackTitle("Silver Wash");
        washPack.setWashpackDescription("Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray");
        washPack.setWashpackPrice(400);
        allWashPacks.add(washPack);
        washPack.setWashpackTitle("Power Wash");
        washPack.setWashpackDescription("Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray");
        washPack.setWashpackPrice(4000);
        allWashPacks.add(washPack); //dummy data

        when(washPackService.washrepo.findAll()).thenReturn(allWashPacks);
        WashPackList actualWashPackList = washPackService.getAllWashpacks(); //saving the new return value of the method that has been tested 

        WashPackList expectedWashPackList = new WashPackList(allWashPacks);
        assertEquals(actualWashPackList, expectedWashPackList, "returns the existing list");
    }


    @Test
    @DisplayName("Wash pack deletion test")
    void testDeletewashPack() {
        StringList stringList = new StringList();
        stringList.add("sftwr7jgsad5h");
        stringList.add("7r2ygwsqyfr2");
        stringList.add("vahysfyqt5");
        when(washPackService.washrepo.countByWashPackId("sftwr7jgsad5h")).thenReturn(1L);
        when(washPackService.washrepo.countByWashPackId("7r2ygwsqyfr2")).thenReturn(2L);
        when(washPackService.washrepo.countByWashPackId("vahysfyqt5")).thenReturn(3L);
        boolean validIds = washPackService.deleteWashPack(stringList);
        stringList.add("088hujqrf23");
        when(washPackService.washrepo.countByWashPackId("088hujqrf23")).thenReturn(0L);
        boolean invalidId = washPackService.deleteWashPack(stringList);
        assertAll(
                ()-> assertTrue(validIds,"Correct id validation for wash pack deletion"),
                ()-> assertFalse(invalidId,"Invalid id checking for deletion")
        );
    }


    @Test
    @DisplayName("Wash pack updation test")
    void testUpdateWashPack() {
        WashPack washPack = new WashPack("576w28w9haj" , "Silver Wash" , "Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dashboard polishing + Car perfume spray" , 400);
        when(washPackService.washrepo.countByWashPackId("576w28w9haj")).thenReturn(2L);
        boolean validDetails = washPackService.updateWashPack(washPack);
        washPack.setWashpackPrice(150);
        boolean invalidPriceIsSaved = washPackService.updateWashPack(washPack);
        washPack.setWashpackPrice(700);
        washPack.setWashpackId("87563fw2qhvs");
        boolean invalidId = washPackService.updateWashPack(washPack);
        assertAll(
                () -> assertTrue(validDetails , "correct details validation for wash pack updation"),
                () -> assertFalse(invalidPriceIsSaved,"Invalid price checking for updation"),
                () -> assertFalse(invalidId,"Checks invalid id even if price is validated for updation")
                );    

    }
    @Test
    @DisplayName("Addon insertion test")
    void testInsertAddOn() {
        AddOn addOn = new AddOn();
        addOn.setAddonTitle("AC Disinfectant");
        addOn.setAddonDescription("The aim of this service is to clean and sanitize the air conditioning compartment of the car.");
        addOn.setAddonPrice(100);
        when(addOnService.addonRepo.save(addOn)).thenReturn(addOn);
        boolean validPriceIsSaved = addOnService.insertAddOn(addOn);
        addOn.setAddonPrice(40);
        boolean invalidPriceIsSaved = addOnService.insertAddOn(addOn);
        assertAll(
                () -> assertTrue(validPriceIsSaved, "Correct details validation of insertion"),
                () -> assertFalse(invalidPriceIsSaved, "Chekcing of invalid price for insertion")
                );   

    }


    @Test
    @DisplayName("List of all add on test")
    void testGetAllAddOns() {
        List<AddOn> allAddOns = new ArrayList<>();
        AddOn addOn = new AddOn();
        addOn.setAddonTitle("AC Disinfectant");
        addOn.setAddonDescription("The aim of this service is to clean and sanitize the air conditioning compartment of the car.");
        addOn.setAddonPrice(100);
        allAddOns.add(addOn);
        addOn.setAddonTitle("Wiper");
        addOn.setAddonDescription("The aim of this service is to clean and sanitize the air conditioning compartment of the car.");
        addOn.setAddonPrice(400);
        allAddOns.add(addOn); //dummy data

        when(addOnService.addonRepo.findAll()).thenReturn(allAddOns);
        AddOnList actualAddOnList = addOnService.getAllAddOns(); //saving the new return value of the method that has been tested

        AddOnList expectedAddOnList = new AddOnList(allAddOns);
        assertEquals(actualAddOnList, expectedAddOnList, "Returns existing list of add on");
    }


    @Test
    @DisplayName("AddOn deletion test")
    void testDeleteAddOn() {
        StringList stringList = new StringList();
        stringList.add("jshd76sdbhjsdf");
        stringList.add("jfvhijhd7wqhg");
        stringList.add("nst76cbhjc");
        when(addOnService.addonRepo.countByAddOnId("jshd76sdbhjsdf")).thenReturn(1L);
        when(addOnService.addonRepo.countByAddOnId("jfvhijhd7wqhg")).thenReturn(2L);
        when(addOnService.addonRepo.countByAddOnId("nst76cbhjc")).thenReturn(3L);
        boolean validIds = addOnService.deleteAddOn(stringList);
        stringList.add("76vhgvhfyt76t");
        when(addOnService.addonRepo.countByAddOnId("76vhgvhfyt76t")).thenReturn(0L);
        boolean invalidId = addOnService.deleteAddOn(stringList);
        assertAll(
                ()-> assertTrue(validIds,"Validates correct id for add on deletion"),
                ()-> assertFalse(invalidId,"Checks invalid id for add on deletion")
        );
    }


    @Test
    @DisplayName("Add on updation test")
    void testUpdateAddOn() {
        AddOn addOn = new AddOn("ghbjhgu876","AC Disinfectant","The aim of this service is to clean and sanitize the air conditioning compartment of the car.",100);
        when(addOnService.addonRepo.countByAddOnId("ghbjhgu876")).thenReturn(2L);
        boolean validDetails = addOnService.updateAddOn(addOn);
        addOn.setAddonPrice(40);
        boolean invalidPriceIsSaved = addOnService.updateAddOn(addOn);
        addOn.setAddonPrice(200);
        addOn.setAddonId("bbut7bhg87");
        boolean invalidId = addOnService.updateAddOn(addOn);
        assertAll(
                () -> assertTrue(validDetails , "Validates correct details for add on updation"),
                () -> assertFalse(invalidPriceIsSaved,"Checks invalid pricce for the updation"),
                () -> assertFalse(invalidId,"Checks invalid id even if price validated for add on updation")
                );   

    }
}

