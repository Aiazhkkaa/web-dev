from models import Book, Magazine

def main
    b1 = Book("The Great Gatsby", "FIC-001", 1925, "F. Scott Fitzgerald", 180)
    m1 = Magazine("National Geographic", "MAG-402", 2023, 5)
    b2 = Book("Python Crash Course", "TECH-101", 2019, "Eric Matthes", 544)
    library_inventory = [b1, m1, b2]

    print("--- Library Inventory ---")
    for item in library_inventory:
        print(item)

    print("\n--- Polymorphism in Action ---")
    for item in library_inventory:
        print(item.get_details())

    print("\n--- Testing Methods ---")
    print(b1.check_out())
    print(f"Updated status: {b1}")

if __name__ == "__main__":
    main()