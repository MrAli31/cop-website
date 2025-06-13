<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

// Get the posted data
$data = json_decode(file_get_contents("php://input"));

// Basic validation
if (
    !isset($data->firstName) || !isset($data->lastName) || !isset($data->email) || 
    !isset($data->dob) || !isset($data->courseName)
) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
    exit();
}

$firstName = $conn->real_escape_string($data->firstName);
$lastName = $conn->real_escape_string($data->lastName);
$email = $conn->real_escape_string($data->email);
$phone = isset($data->phone) ? $conn->real_escape_string($data->phone) : null;
$dob = $conn->real_escape_string($data->dob);
$courseName = $conn->real_escape_string($data->courseName);

// Start transaction
$conn->begin_transaction();

try {
    // 1. Insert into students table
    $sqlStudent = "INSERT INTO students (first_name, last_name, email, phone_number, date_of_birth) VALUES (?, ?, ?, ?, ?)";
    $stmtStudent = $conn->prepare($sqlStudent);
    $stmtStudent->bind_param("sssss", $firstName, $lastName, $email, $phone, $dob);
    $stmtStudent->execute();

    // Get the new student's ID
    $studentId = $conn->insert_id;

    // 2. Insert into enrollments table
    $sqlEnrollment = "INSERT INTO enrollments (student_id, course_name) VALUES (?, ?)";
    $stmtEnrollment = $conn->prepare($sqlEnrollment);
    $stmtEnrollment->bind_param("is", $studentId, $courseName);
    $stmtEnrollment->execute();

    // Commit the transaction
    $conn->commit();

    echo json_encode(['success' => true, 'message' => 'Enrollment successful!']);

} catch (mysqli_sql_exception $exception) {
    $conn->rollback();
    
    // Check for duplicate email error
    if ($conn->errno === 1062) {
        echo json_encode(['success' => false, 'message' => 'This email is already registered.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $exception->getMessage()]);
    }
}

$conn->close();
?>
