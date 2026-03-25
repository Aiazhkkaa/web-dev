class LibraryItem:
    def __init__(self, title, call_number, year):
        self.title = title
        self.call_number = call_number
        self.year = year
        self.is_checked_out = False

    def check_out(self):
        self.is_checked_out = True
        return f"{self.title} has been checked out."

    def return_item(self):
        self.is_checked_out = False
        return f"{self.title} has been returned."

    def get_details(self):
        """This method will be overridden by children."""
        return f"Item: {self.title} ({self.year})"

    def __str__(self):
        status = "Available" if not self.is_checked_out else "Checked Out"
        return f"[{self.call_number}] {self.title} - {status}"


class Book(LibraryItem):
    def __init__(self, title, call_number, year, author, pages):
        super().__init__(title, call_number, year)
        self.author = author
        self.pages = pages

    def get_details(self):
        return f"Book: {self.title} by {self.author}, {self.pages} pages."


class Magazine(LibraryItem):
    def __init__(self, title, call_number, year, issue_number):
        super().__init__(title, call_number, year)
        self.issue_number = issue_number

    def get_details(self):
        return f"Magazine: {self.title} (Issue #{self.issue_number}), published in {self.year}."