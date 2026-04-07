from models import LibraryItem, Book, Magazine

def main():
    b1 = Book("The Great Gatsby", "BK-001", 1925, "F. Scott Fitzgerald", 180)
    m1 = Magazine("National Geographic", "MAG-402", 2023, 5)
    p1=newpaper('')
    library_inventory = [b1, m1]

    print("--- Library ---")
    for item in library_inventory:
        print(item)

    print("\n--- Get details ---")
    for item in library_inventory:
        print(item.get_details())

    print("\n--- Checking ---")
    print(b1.check_out())
    print(f"Updated status: {b1}")

if __name__ == "__main__":
    main()