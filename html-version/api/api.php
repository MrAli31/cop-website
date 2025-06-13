<?php
require_once '../config.php';

header('Content-Type: application/json');

// Get request method and endpoint
$method = $_SERVER['REQUEST_METHOD'];
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';

// Handle different endpoints
switch($endpoint) {
    case 'blog':
        if($method === 'GET') {
            try {
                $featured = isset($_GET['featured']) ? 'WHERE featured = 1' : '';
                $stmt = $pdo->query("SELECT * FROM blog_posts $featured ORDER BY date_posted DESC");
                echo json_encode(['success' => true, 'data' => $stmt->fetchAll(PDO::FETCH_ASSOC)]);
            } catch(PDOException $e) {
                echo json_encode(['success' => false, 'error' => $e->getMessage()]);
            }
        }
        break;

    case 'newsletter':
        if($method === 'POST') {
            try {
                $email = sanitize_input($_POST['email']);
                $stmt = $pdo->prepare("INSERT INTO newsletter_subscribers (email) VALUES (?)");
                $stmt->execute([$email]);
                echo json_encode(['success' => true, 'message' => 'Successfully subscribed!']);
            } catch(PDOException $e) {
                echo json_encode(['success' => false, 'error' => 'Email already subscribed or invalid.']);
            }
        }
        break;

    case 'enroll':
        if($method === 'POST') {
            try {
                $name = sanitize_input($_POST['name']);
                $email = sanitize_input($_POST['email']);
                $course_id = (int)$_POST['course_id'];
                
                $stmt = $pdo->prepare("INSERT INTO enrollments (student_name, email, course_id) VALUES (?, ?, ?)");
                $stmt->execute([$name, $email, $course_id]);
                echo json_encode(['success' => true, 'message' => 'Enrollment successful!']);
            } catch(PDOException $e) {
                echo json_encode(['success' => false, 'error' => 'Enrollment failed. Please try again.']);
            }
        }
        break;

    case 'contact':
        if($method === 'POST') {
            try {
                $name = sanitize_input($_POST['name']);
                $email = sanitize_input($_POST['email']);
                $subject = sanitize_input($_POST['subject']);
                $message = sanitize_input($_POST['message']);
                
                $stmt = $pdo->prepare("INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
                $stmt->execute([$name, $email, $subject, $message]);
                echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
            } catch(PDOException $e) {
                echo json_encode(['success' => false, 'error' => 'Failed to send message. Please try again.']);
            }
        }
        break;

    default:
        echo json_encode(['success' => false, 'error' => 'Invalid endpoint']);
}
?> 