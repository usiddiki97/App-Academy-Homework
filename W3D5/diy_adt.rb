# DIY ADTs

# Exercise 1 - Stack

# Let's write a Stack class. To do this, use the following framework:

class Stack
    def initialize
        # create ivar to store stack here!
        @stack = []
    end

    def push(el)
        # adds an element to the stack
        @stack << el
    end

    def pop
        # removes one element from the stack
        @stack.pop
    end

    def peek
        # returns, but doesn't remove, the top element in the stack
        @stack.last
    end
end

# To test that your code works, create a new instance of the Stack class, and
# play around with adding and removing elements. Remember, a stack follows the
# principle of LIFO!

# Exercise 2 - Queue

# Now let's write a Queue class. We will need the following instance methods:
# enqueue(el), dequeue, and peek.

class Queue

    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue << el
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue.first
    end

end


class Queue
    def initialize
        @queue = []
    end

    def enqueue(el)
        @queue.push(el)
    end

    def dequeue
        @queue.shift
    end

    def peek
        @queue.first
    end
end

# Test your code to ensure it follows the principle of FIFO.

# Exercise 3 - Map

# As you saw in the videos for tonight, a map can be implemented using a 2D
# array. Let's write a Map class (following a similar pattern to Stack and
# Queue) that implements a map using only arrays.

# Remember, a map stores information in key-value pairs, where the keys are
# always unique. When implemented with arrays, a map might look something like
# this: my_map = [[k1, v1], [k2, v2], [k3, v2], ...].

# Our Map class should have the following instance methods: set(key, value),
# get(key), delete(key), show. Note that the set method can be used to either
# create a new key-value pair or update the value for a pre-existing key. It's
# up to you to check whether a key currently exists!

# As always, test your code thoroughly to make sure all properties of maps ar
#e enforced.

class Map
    def initialize
        @map = Array.new {[]}
    end

    def set(key,value)
        pair_index = @map.index { |pair| pair[0] == key }
        pair_index ? @map[pair_index][1] = value : @map << [key, value]
    end
    
    def get(key)
        pair_index = @map.index { |pair| pair[0] == key }
        pair_index ? @map[pair_index][1] : nil
    end

    # def get(key)
    #     underlying_array.each { |pair| return pair[1] if pair[0] == key }
    #     nil
    # end

    def delete(key)
        @map.reject! { |pair| pair[0] == key }
    end
end


class Map
    def initialize
        @arr_map = []
    end

    def set(key, value)
       @arr_map.each do |pair|
            unless pair[0] == key
                @arr_map << [key, value]
            else
                pair[1] = value
            end
        end
    end

    def get(key)
        @arr_map.each { |pair| return pair[1] if pair[0] == key }
        return "The key for which you are searching for does not exist :O"
    end

    def delete(key)
        @arr_map.each { |pair| @arr_map.delete(pair) if pair [0] == key } 
    end

    def show
        @map.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
    end

end