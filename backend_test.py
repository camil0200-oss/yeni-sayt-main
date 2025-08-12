#!/usr/bin/env python3
"""
Backend API Testing for Smart Kilid Sistemləri (Smart Lock Systems)
Tests all API endpoints and validates responses according to requirements.
"""

import requests
import json
import os
from datetime import datetime

# Get base URL from environment - using localhost for testing due to ingress routing issue
BASE_URL = "http://localhost:3000"
API_BASE = f"{BASE_URL}/api"
EXTERNAL_URL = os.getenv('NEXT_PUBLIC_BASE_URL', 'https://e75d66f8-2236-42bc-ad92-e5bbf0b152c1.preview.emergentagent.com')

def print_test_header(test_name):
    """Print formatted test header"""
    print(f"\n{'='*60}")
    print(f"Testing: {test_name}")
    print(f"{'='*60}")

def print_test_result(test_name, success, details=""):
    """Print formatted test result"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status} - {test_name}")
    if details:
        print(f"Details: {details}")

def test_health_endpoint():
    """Test GET /api/health endpoint"""
    print_test_header("Health Check Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/health", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Validate required fields
            required_fields = ['status', 'timestamp', 'service']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print_test_result("Health Check", False, f"Missing fields: {missing_fields}")
                return False
            
            # Validate field values
            if data['status'] != 'ok':
                print_test_result("Health Check", False, f"Invalid status: {data['status']}")
                return False
                
            if data['service'] != 'Smart Kilid Sistemləri API':
                print_test_result("Health Check", False, f"Invalid service name: {data['service']}")
                return False
            
            print_test_result("Health Check", True, "All fields present and valid")
            return True
        else:
            print_test_result("Health Check", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Health Check", False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_test_result("Health Check", False, f"Invalid JSON response: {str(e)}")
        return False

def test_default_api_route():
    """Test GET /api/ endpoint"""
    print_test_header("Default API Route")
    
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Validate required fields
            required_fields = ['message', 'version', 'endpoints']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print_test_result("Default API Route", False, f"Missing fields: {missing_fields}")
                return False
            
            # Validate field values
            if data['message'] != 'Smart Kilid Sistemləri API':
                print_test_result("Default API Route", False, f"Invalid message: {data['message']}")
                return False
                
            if not isinstance(data['endpoints'], list):
                print_test_result("Default API Route", False, "Endpoints should be a list")
                return False
            
            print_test_result("Default API Route", True, "All fields present and valid")
            return True
        else:
            print_test_result("Default API Route", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Default API Route", False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_test_result("Default API Route", False, f"Invalid JSON response: {str(e)}")
        return False

def test_contact_form_valid():
    """Test POST /api/contact with valid data"""
    print_test_header("Contact Form - Valid Data")
    
    # Test data as specified in review request
    test_data = {
        "name": "Rəşad Məmmədov",
        "phone": "+994501234567",
        "email": "rashad@example.com",
        "message": "Elektron darvaza sistemi üçün qiymət soruşuram"
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            json=test_data,
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Validate required fields
            required_fields = ['success', 'message', 'data']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print_test_result("Contact Form Valid", False, f"Missing fields: {missing_fields}")
                return False
            
            # Validate success field
            if not data['success']:
                print_test_result("Contact Form Valid", False, "Success should be true")
                return False
            
            # Validate returned data matches input
            returned_data = data['data']
            for key, value in test_data.items():
                if returned_data.get(key) != value:
                    print_test_result("Contact Form Valid", False, f"Data mismatch for {key}")
                    return False
            
            print_test_result("Contact Form Valid", True, "Valid data processed correctly")
            return True
        else:
            print_test_result("Contact Form Valid", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("Contact Form Valid", False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_test_result("Contact Form Valid", False, f"Invalid JSON response: {str(e)}")
        return False

def test_contact_form_missing_required():
    """Test POST /api/contact with missing required fields"""
    print_test_header("Contact Form - Missing Required Fields")
    
    # Test data missing required fields (name and phone)
    test_cases = [
        {"email": "test@example.com", "message": "Test message"},  # Missing name and phone
        {"name": "Test User", "email": "test@example.com"},  # Missing phone
        {"phone": "+994551234567", "email": "test@example.com"},  # Missing name
    ]
    
    all_passed = True
    
    for i, test_data in enumerate(test_cases, 1):
        print(f"\nTest Case {i}: {test_data}")
        
        try:
            response = requests.post(
                f"{API_BASE}/contact",
                json=test_data,
                headers={'Content-Type': 'application/json'},
                timeout=10
            )
            
            print(f"Status Code: {response.status_code}")
            print(f"Response: {response.text}")
            
            if response.status_code == 400:
                data = response.json()
                if 'error' in data and 'tələb olunur' in data['error']:
                    print(f"✅ Test Case {i} - Correct validation error in Azerbaijani")
                else:
                    print(f"❌ Test Case {i} - Invalid error message format")
                    all_passed = False
            else:
                print(f"❌ Test Case {i} - Expected 400, got {response.status_code}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ Test Case {i} - Request failed: {str(e)}")
            all_passed = False
        except json.JSONDecodeError as e:
            print(f"❌ Test Case {i} - Invalid JSON response: {str(e)}")
            all_passed = False
    
    print_test_result("Contact Form Validation", all_passed, "Required field validation")
    return all_passed

def test_invalid_endpoints():
    """Test invalid endpoints return 404"""
    print_test_header("Invalid Endpoints")
    
    invalid_endpoints = [
        "/api/nonexistent",
        "/api/users",
        "/api/products",
        "/api/invalid/path"
    ]
    
    all_passed = True
    
    for endpoint in invalid_endpoints:
        print(f"\nTesting: {endpoint}")
        
        try:
            response = requests.get(f"{BASE_URL}{endpoint}", timeout=10)
            
            print(f"Status Code: {response.status_code}")
            
            if response.status_code == 404:
                print(f"✅ {endpoint} - Correctly returns 404")
            else:
                print(f"❌ {endpoint} - Expected 404, got {response.status_code}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ {endpoint} - Request failed: {str(e)}")
            all_passed = False
    
    print_test_result("Invalid Endpoints", all_passed, "404 responses for invalid paths")
    return all_passed

def test_unsupported_methods():
    """Test unsupported HTTP methods return 405"""
    print_test_header("Unsupported HTTP Methods")
    
    methods_to_test = [
        ("PUT", requests.put),
        ("DELETE", requests.delete),
    ]
    
    all_passed = True
    
    for method_name, method_func in methods_to_test:
        print(f"\nTesting {method_name} method on /api/health")
        
        try:
            response = method_func(f"{API_BASE}/health", timeout=10)
            
            print(f"Status Code: {response.status_code}")
            print(f"Response: {response.text}")
            
            if response.status_code == 405:
                data = response.json()
                if 'error' in data and 'not allowed' in data['error'].lower():
                    print(f"✅ {method_name} - Correctly returns 405 with proper error")
                else:
                    print(f"❌ {method_name} - Invalid error message format")
                    all_passed = False
            else:
                print(f"❌ {method_name} - Expected 405, got {response.status_code}")
                all_passed = False
                
        except requests.exceptions.RequestException as e:
            print(f"❌ {method_name} - Request failed: {str(e)}")
            all_passed = False
        except json.JSONDecodeError as e:
            print(f"❌ {method_name} - Invalid JSON response: {str(e)}")
            all_passed = False
    
    print_test_result("Unsupported Methods", all_passed, "405 responses for unsupported methods")
    return all_passed

def test_malformed_requests():
    """Test malformed requests are handled properly"""
    print_test_header("Malformed Requests")
    
    all_passed = True
    
    # Test invalid JSON
    print("\nTesting invalid JSON data")
    try:
        response = requests.post(
            f"{API_BASE}/contact",
            data="invalid json data",
            headers={'Content-Type': 'application/json'},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 500:
            data = response.json()
            if 'error' in data and 'Server xətası' in data['error']:
                print("✅ Invalid JSON - Correctly handled with Azerbaijani error")
            else:
                print("❌ Invalid JSON - Invalid error message format")
                all_passed = False
        else:
            print(f"❌ Invalid JSON - Expected 500, got {response.status_code}")
            all_passed = False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Invalid JSON - Request failed: {str(e)}")
        all_passed = False
    except json.JSONDecodeError as e:
        print(f"❌ Invalid JSON - Invalid JSON response: {str(e)}")
        all_passed = False
    
    print_test_result("Malformed Requests", all_passed, "Proper error handling for invalid data")
    return all_passed

def test_external_url_routing():
    """Test external URL API routing"""
    print_test_header("External URL API Routing")
    
    external_api_base = f"{EXTERNAL_URL}/api"
    
    print(f"Testing external URL: {external_api_base}")
    
    # Test health endpoint via external URL
    try:
        response = requests.get(f"{external_api_base}/health", timeout=15)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Validate required fields
            required_fields = ['status', 'timestamp', 'service']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print_test_result("External URL Routing", False, f"Missing fields: {missing_fields}")
                return False
            
            print_test_result("External URL Routing", True, "External API routing working correctly")
            return True
        elif response.status_code == 502:
            print_test_result("External URL Routing", False, "502 Bad Gateway - Kubernetes ingress routing issue")
            return False
        else:
            print_test_result("External URL Routing", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("External URL Routing", False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_test_result("External URL Routing", False, f"Invalid JSON response: {str(e)}")
        return False

def test_external_contact_form():
    """Test POST /api/contact via external URL with review request data"""
    print_test_header("External URL Contact Form")
    
    external_api_base = f"{EXTERNAL_URL}/api"
    
    # Test data as specified in review request
    test_data = {
        "name": "Rəşad Məmmədov",
        "phone": "+994501234567",
        "email": "rashad@example.com",
        "message": "Elektron darvaza sistemi üçün qiymət soruşuram"
    }
    
    try:
        response = requests.post(
            f"{external_api_base}/contact",
            json=test_data,
            headers={'Content-Type': 'application/json'},
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Validate required fields
            required_fields = ['success', 'message', 'data']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print_test_result("External Contact Form", False, f"Missing fields: {missing_fields}")
                return False
            
            # Validate success field
            if not data['success']:
                print_test_result("External Contact Form", False, "Success should be true")
                return False
            
            # Check for Azerbaijani success message
            if 'Müraciətiniz qəbul edildi' in data.get('message', ''):
                print_test_result("External Contact Form", True, "External contact form working with Azerbaijani response")
                return True
            else:
                print_test_result("External Contact Form", False, "Azerbaijani success message not found")
                return False
        elif response.status_code == 502:
            print_test_result("External Contact Form", False, "502 Bad Gateway - Kubernetes ingress routing issue")
            return False
        else:
            print_test_result("External Contact Form", False, f"Expected 200, got {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_test_result("External Contact Form", False, f"Request failed: {str(e)}")
        return False
    except json.JSONDecodeError as e:
        print_test_result("External Contact Form", False, f"Invalid JSON response: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("🚀 Starting Smart Kilid Sistemləri Backend API Tests")
    print(f"Testing URL: {BASE_URL}")
    print(f"API Base: {API_BASE}")
    print(f"External URL: {EXTERNAL_URL}")
    print(f"Note: Using localhost for testing due to external API routing issue")
    print(f"Test Time: {datetime.now().isoformat()}")
    
    test_results = []
    
    # Run all tests
    test_results.append(("Health Check Endpoint", test_health_endpoint()))
    test_results.append(("Default API Route", test_default_api_route()))
    test_results.append(("Contact Form Valid Data", test_contact_form_valid()))
    test_results.append(("Contact Form Validation", test_contact_form_missing_required()))
    test_results.append(("Invalid Endpoints", test_invalid_endpoints()))
    test_results.append(("Unsupported Methods", test_unsupported_methods()))
    test_results.append(("Malformed Requests", test_malformed_requests()))
    
    # Print summary
    print(f"\n{'='*60}")
    print("TEST SUMMARY")
    print(f"{'='*60}")
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    print(f"Success Rate: {(passed/len(test_results)*100):.1f}%")
    
    if failed == 0:
        print("\n🎉 All tests passed! Backend API is ready for production.")
    else:
        print(f"\n⚠️  {failed} test(s) failed. Please review the issues above.")
    
    return failed == 0

if __name__ == "__main__":
    success = run_all_tests()
    exit(0 if success else 1)