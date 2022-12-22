# Big O-ctopus and Biggest Fish

# A Very Hungry Octopus wants to eat the longest fish in an array of fish.

a = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# => "fiiiissshhhhhh"
# Sluggish Octopus

# Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths

def sluggish(fish)
    fish.each_with_index do |fish1, idx1|
        biggest = fish1
        fish.each_with_index do |fish2,idx2|
            if idx2 > idx1
              biggest = fish2 if fish2.length > biggest.length
            end
        end
        return biggest
    end
end

p sluggish(a)

# Dominant Octopus

# Find the longest fish in O(n log n) time. Hint: You saw a sorting algorithm that runs
# in O(n log n) in the Sorting Complexity Demo. Remember that Big O is classified by the dominant term.

# def quick_sort(fish)
#     return fish if fish.length == 1
    
#     pivot_fish = fish.first

#     left_side = fish[1..-1].select { |fish| fish.length < pivot_fish.length }
#     right_side = fish[1..-1].select { |fish| fish.length >= pivot_fish.length }

#     quick_sort(left_side) + [pivot_fish] + quick_sort(right_side)
# end

# p quick_sort(a).last

# Clever Octopus

# Find the longest fish in O(n) time. The octopus can hold on to the longest fish that you
# have found so far while stepping through the array only once.

def clever(fish)
    biggest = fish[0]
    fish[1..-1].each { |fish| biggest = fish if fish.length > biggest.length }
    biggest
end

# p clever(a)

# Full of fish, the Octopus attempts Dance Dance Revolution. The game has tiles in the following directions:

 tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
# To play the game, the octopus must step on a tile with her corresponding tentacle. We can assume that
# the octopus's eight tentacles are numbered and correspond to the tile direction indices.

# Slow Dance

# Given a tile direction, iterate through a tiles array to return the tentacle number (tile index)
# the octopus must move. This should take O(n) time.

def slow_dance(dir, tiles)
    tiles.each_with_index { |tile,idx| return idx if tile == dir} 
end

# p slow_dance("up", tiles_array)
# > 0

# p slow_dance("right-down", tiles_array)
# > 3

# Constant Dance!

# Now that the octopus is warmed up, let's help her dance faster. Use a different
# data structure and write a new function so that you can access the tentacle number in O(1) time.

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}


def fast_dance(dir, hash)
    hash[dir]
end

# p fast_dance("up", tiles_hash)
# > 0

# p fast_dance("right-down", tiles_hash)
# > 3