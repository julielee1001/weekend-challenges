# Read text from a file
def read_text_from_file(filename)
    File.read(filename)
end

=begin 
 try using Ruby methods
 it's similar to using a function in js
 look up function/method `read_text_from_file` as an example
 structure: 
 def method_name
    logic of method goes in here
 end
=end

# logic for text_analyzer requirments go here:

# method that counts the number of words
def number_of_words(text)
    text.split.length
end

# method that counts the number of characters
def number_of_char(text)
    text.bytesize
end

# method that counts the number of paragraphs
def number_of_para(text)
    text.split(/\n\n/).length 
end

# method to identify most common word
def get_word_frequencies(text)
    words = text.split
    frequencies = Hash.new(0)
    words.each{|word| frequencies[word] += 1}
    frequencies = frequencies.sort_by {|word, frequency| frequency}
    frequencies.reverse!
end

# Analyze the sample text
filename = 'sample.txt' # Replace with your text file
text = read_text_from_file(filename)

# method instances
# word count instance
word_count = number_of_words(text)

# character count instance
char_count = number_of_char(text)

# paragraph count instance
para_count = number_of_para(text)

# word frequency instance
word_frequency_list = get_word_frequencies(text)
most_common_word = word_frequency_list.first

# top 10 common words sorting
most_common_ten = word_frequency_list.first(10)

# use `text` ^ to pass as a parameters to your methods

# puts statements to console go here:
puts "Word Count: #{word_count}"
puts "Character Count: #{char_count}"
puts "Paragraph Count: #{para_count}"

# identify most common word in doc and display it
puts "Most Common Word: #{most_common_word}"

# display top 10 most common words and frequency stats
puts "Top 10 Most Common Words: "
most_common_ten.each {|word, frequency| puts word + " " + frequency.to_s}
