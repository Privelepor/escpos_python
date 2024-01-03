<?php
require 'vendor/autoload.php';

use Mike42\Escpos\PrintConnectors\DummyPrintConnector; // Use DummyPrintConnector for testing
use Mike42\Escpos\PrintConnectors\FilePrintConnector; // Use FilePrintConnector for direct printing
use Mike42\Escpos\Printer;

// Base64 data received from your application
$base64Data = $_POST['canvasData']; // Replace this with your data source

// Decode the Base64 data
$decodedData = base64_decode($base64Data);

// Create a connector for Bluetooth printer (replace with your actual Bluetooth address)
$connector = new FilePrintConnector("bt://DC:0D:30:EB:7C:3C");

// Initialize the printer
$printer = new Printer($connector);

// Print the data
$printer->text($decodedData);

// Add a paper cut command for automatic cutting
$printer->cut();

// Close the printer connection
$printer->close();
?>
